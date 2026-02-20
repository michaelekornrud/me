import { useState, useRef, useEffect } from "react";

/**
 * LazyImage Component
 *
 * A React component that implements lazy loading for images using the Intersection Observer API.
 * Images are only loaded when they come into the viewport, improving page performance.
 *
 * @param {string} src - The image source URL
 * @param {string} srcSet - The responsive image source set
 * @param {string} alt - Alternative text for the image
 * @param {string} className - CSS class names for styling
 * @param {object} props - Additional props passed to the img element
 */
const LazyImage = ({ src, srcSet, alt, className, easeIn, ...props }) => {
  // Track whether the image has finished loading
  const [isLoaded, setIsLoaded] = useState(false);

  // Track whether the image container is visible in the viewport
  const [isInView, setIsInView] = useState(false);

  // Reference to the container div for intersection observation
  const imgRef = useRef();

  useEffect(() => {
    // Create an Intersection Observer to detect when the image enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting (visible in viewport)
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger image loading
          observer.disconnect(); // Stop observing once image is triggered to load
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    // Start observing the container element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array - only run once on mount

  return (
    <div ref={imgRef} className={className}>
      {/* Only render the image when it's in view */}
      {isInView && (
        <img
          src={src}
          srcSet={srcSet}
          alt={alt}
          onLoad={() => setIsLoaded(true)} // Set loaded state when image finishes loading
          style={{
            opacity: isLoaded ? 1 : 0, // Fade in effect
            transition: `opacity ${easeIn || 0.3}s ease-in`, // Smooth transition animation
          }}
          {...props} // Spread any additional props to the img element
        />
      )}
    </div>
  );
};

export default LazyImage;
