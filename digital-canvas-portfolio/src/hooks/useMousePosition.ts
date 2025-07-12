import { useState, useEffect, useCallback } from 'react';

interface PointerPosition {
  x: number;
  y: number;
}

export const useMousePosition = (): PointerPosition => {
  const [pointerPosition, setPointerPosition] = useState<PointerPosition>({ x: 0, y: 0 });

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    setPointerPosition({ x: clientX, y: clientY });
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    updatePosition(event.clientX, event.clientY);
  }, [updatePosition]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    }
  }, [updatePosition]);

  useEffect(() => {
    // Throttle events for performance
    let timeoutId: NodeJS.Timeout;
    
    const throttledMouseUpdate = (event: MouseEvent) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(event), 16); // ~60fps
    };

    const throttledTouchUpdate = (event: TouchEvent) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleTouchMove(event), 16); // ~60fps
    };

    // Add both mouse and touch event listeners
    window.addEventListener('mousemove', throttledMouseUpdate);
    window.addEventListener('touchmove', throttledTouchUpdate);

    return () => {
      window.removeEventListener('mousemove', throttledMouseUpdate);
      window.removeEventListener('touchmove', throttledTouchUpdate);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove, handleTouchMove]);

  return pointerPosition;
};