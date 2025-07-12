import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const updateMousePosition = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    // Throttle mouse events for performance
    let timeoutId: NodeJS.Timeout;
    const throttledUpdate = (event: MouseEvent) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => updateMousePosition(event), 16); // ~60fps
    };

    window.addEventListener('mousemove', throttledUpdate);

    return () => {
      window.removeEventListener('mousemove', throttledUpdate);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [updateMousePosition]);

  return mousePosition;
};