"use client";

import { useState, useEffect, useRef, forwardRef } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './ImageWithSkeleton.module.css';

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  onImageLoad?: () => void;
  objectFit?: string;
}

const ImageWithSkeleton = forwardRef<HTMLDivElement, ImageWithSkeletonProps>(
  ({ src, alt, width, height, className, priority, objectFit, onImageLoad, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const preloadImgRef = useRef<HTMLImageElement | null>(null);
    const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (!src) return;

      setIsLoading(true);
      setHasError(false);

      // Preload image to check if it's already cached or to trigger load event
      const preloadImg = new window.Image();
      preloadImgRef.current = preloadImg;

      const handlePreloadLoad = () => {
        // Image is loaded (cached or fresh)
        if (loadTimeoutRef.current) {
          clearTimeout(loadTimeoutRef.current);
        }
        setIsLoading(false);
        if (onImageLoad) {
          onImageLoad();
        }
      };

      const handlePreloadError = () => {
        if (loadTimeoutRef.current) {
          clearTimeout(loadTimeoutRef.current);
        }
        setHasError(true);
        setIsLoading(false);
      };

      preloadImg.onload = handlePreloadLoad;
      preloadImg.onerror = handlePreloadError;
      
      // Extract string URL if src is a StaticImageData object
      preloadImg.src = typeof src === 'string' ? src : (src as any).src || '';

      // Fallback timeout in case onload doesn't fire (for very fast cached images)
      loadTimeoutRef.current = setTimeout(() => {
        // Check if image is actually loaded
        if (preloadImg.complete && preloadImg.naturalHeight !== 0) {
          handlePreloadLoad();
        } else {
          // Give it more time
          loadTimeoutRef.current = setTimeout(() => {
            setIsLoading(false);
            if (onImageLoad) {
              onImageLoad();
            }
          }, 500);
        }
      }, 50);

      return () => {
        if (loadTimeoutRef.current) {
          clearTimeout(loadTimeoutRef.current);
        }
        if (preloadImgRef.current) {
          preloadImgRef.current.onload = null;
          preloadImgRef.current.onerror = null;
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src]);

    const handleLoad = () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      setIsLoading(false);
      if (onImageLoad) {
        onImageLoad();
      }
    };

    const handleError = () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      setHasError(true);
      setIsLoading(false);
    };

    if (!src || hasError) {
      return (
        <div
          ref={ref}
          className={`${styles.skeleton} ${className || ''}`}
          style={{ width: width || '100%', height: height || '100%' }}
        >
          <div className={styles.skeletonContent}></div>
        </div>
      );
    }

    const isFill = (props as any).fill === true || (props as any).fill === '';
    const wrapperStyle = { 
      width: width || '100%', 
      height: height || '100%',
      ...(isFill ? { position: 'absolute' as const, top: 0, left: 0, bottom: 0, right: 0 } : {})
    };

    return (
      <div ref={ref} className={`${styles.imageWrapper} ${className || ''}`} style={wrapperStyle}>
        {isLoading && (
          <div className={styles.skeleton}>
            <div className={styles.skeletonContent}></div>
          </div>
        )}
        <div className={isLoading ? styles.imageContainerHidden : styles.imageContainerVisible}>
          <Image
            ref={imgRef as any}
            src={src}
            alt={alt || "image"}
            width={width}
            height={height}
            priority={priority}
            style={{ objectFit: (objectFit as any) || 'cover', width: '100%', height: '100%' }}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </div>
      </div>
    );
  }
);

ImageWithSkeleton.displayName = 'ImageWithSkeleton';

export default ImageWithSkeleton;
