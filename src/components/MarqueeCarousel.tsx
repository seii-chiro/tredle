import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface MarqueeCarouselProps {
    items: ReactNode[];
    speed?: number;
    gap?: number;
    pauseOnHover?: boolean;
    direction?: 'left' | 'right';
}

const MarqueeCarousel: React.FC<MarqueeCarouselProps> = ({
    items,
    speed = 1,
    gap = 40,
    pauseOnHover = true,
    direction = "left"
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    useEffect(() => {
        if (!scrollerRef.current) return;

        // Clone the content to create the continuous effect
        const scrollerContent = Array.from(scrollerRef.current.children) as HTMLElement[];

        // Add clones to create the continuous scroll effect
        scrollerContent.forEach(item => {
            const clone = item.cloneNode(true) as HTMLElement;
            scrollerRef.current?.appendChild(clone);
        });

        // Calculate total width of first set of items
        const firstSetWidth = scrollerContent.reduce((total, item) => {
            return total + item.offsetWidth + gap;
        }, 0);

        // Start the animation
        let animationId: number;
        let scrollPos = 0;

        const scroll = (): void => {
            if (!scrollerRef.current || isPaused) {
                animationId = requestAnimationFrame(scroll);
                return;
            }

            // Adjust scroll speed and direction
            const scrollSpeed = direction === 'left' ? speed : -speed;
            scrollPos += scrollSpeed;

            // Reset position when we've scrolled through the first set of items
            if (direction === 'left' && scrollPos >= firstSetWidth) {
                scrollPos = 0;
            } else if (direction === 'right' && scrollPos <= 0) {
                scrollPos = firstSetWidth;
            }

            // Apply the scroll position using translate3d for better performance
            scrollerRef.current.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;

            animationId = requestAnimationFrame(scroll);
        };

        // Start the animation
        animationId = requestAnimationFrame(scroll);

        // Clean up animation when component unmounts
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isPaused, speed, gap, direction]);

    return (
        <div
            className="w-full overflow-hidden"
            ref={containerRef}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <div
                className="flex"
                ref={scrollerRef}
                style={{ gap: `${gap}px` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeCarousel;