import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./CardPixelReveal.css"

const CardPixelReveal = ({
    defaultImage,
    activeImage,
    gridSize = 7,
    animationStepDuration = 0.3
}) => {
    const cardRef = useRef(null);
    const pixelGridRef = useRef(null);
    const activeCardRef = useRef(null);
    const defaultCardRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const createPixelGrid = () => {
        const pixelGrid = pixelGridRef.current;
        const pixelSize = 100 / gridSize;

        // Clear existing pixels
        while (pixelGrid.firstChild) {
            pixelGrid.removeChild(pixelGrid.firstChild);
        }

        // Create grid of pixels
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixelated-image-card__pixel');
                pixel.style.width = `${pixelSize}%`;
                pixel.style.height = `${pixelSize}%`;
                pixel.style.left = `${col * pixelSize}%`;
                pixel.style.top = `${row * pixelSize}%`;
                pixelGrid.appendChild(pixel);
            }
        }
    };

    const animatePixels = (activate) => {
        const cardElement = cardRef.current;
        const pixels = pixelGridRef.current.querySelectorAll('.pixelated-image-card__pixel');
        const activeCard = activeCardRef.current;
        const defaultCard = defaultCardRef.current;

        // Ensure we have all necessary elements
        if (!cardElement || !pixels.length || !activeCard || !defaultCard) return;

        const totalPixels = pixels.length;
        const staggerDuration = animationStepDuration / totalPixels;

        // Kill any existing animations
        gsap.killTweensOf(pixels);

        // Reset pixels
        gsap.set(pixels, { display: 'none' });

        // Show pixels randomly
        gsap.to(pixels, {
            display: 'block',
            duration: 0,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });

        // Toggle active card visibility
        gsap.delayedCall(animationStepDuration, () => {
            if (activate) {
                defaultCard.style.display = 'none';
                activeCard.style.display = 'block';
                activeCard.style.pointerEvents = 'none';
            } else {
                activeCard.style.display = 'none';
                defaultCard.style.display = 'block';
            }
        });

        // Hide pixels randomly
        gsap.to(pixels, {
            display: 'none',
            duration: 0,
            delay: animationStepDuration,
            stagger: {
                each: staggerDuration,
                from: 'random'
            }
        });

        setIsActive(activate);
    };

    useEffect(() => {
        // Ensure DOM is fully loaded
        const cardElement = cardRef.current;
        if (!cardElement) return;

        // Create pixel grid
        createPixelGrid();

        // Handle mouse interactions
        const handleMouseEnter = () => {
            if (!isActive) {
                animatePixels(true);
            }
        };

        const handleMouseLeave = () => {
            if (isActive) {
                animatePixels(false);
            }
        };

        // Add event listeners
        cardElement.addEventListener('mouseenter', handleMouseEnter);
        cardElement.addEventListener('mouseleave', handleMouseLeave);

        // Ensure default image is visible on initial render
        if (defaultCardRef.current) {
            defaultCardRef.current.style.display = 'block';
        }
        if (activeCardRef.current) {
            activeCardRef.current.style.display = 'none';
        }

        // Cleanup function
        return () => {
            cardElement.removeEventListener('mouseenter', handleMouseEnter);
            cardElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            data-pixelated-image-reveal
            className="pixelated-image-card"
        >
            <div className="before__100"></div>
            <div
                ref={defaultCardRef}
                className="pixelated-image-card__default"
            >
                <img
                    src={defaultImage}
                    width="400"
                    alt=""
                    className="pixelated-image-card__img"
                />
            </div>
            <div
                ref={activeCardRef}
                data-pixelated-image-reveal-active
                className="pixelated-image-card__active"
                style={{ display: 'none' }}
            >
                <img
                    src={activeImage}
                    width="400"
                    alt=""
                    className="pixelated-image-card__img"
                />
            </div>
            <div
                ref={pixelGridRef}
                data-pixelated-image-reveal-grid
                className="pixelated-image-card__pixels"
            >
                <div className="pixelated-image-card__pixel"></div>
            </div>
        </div>
    );
};

export default CardPixelReveal;