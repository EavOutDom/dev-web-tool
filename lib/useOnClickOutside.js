import { useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listen = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listen);
    document.addEventListener('touchstart', listen);
    return () => {
      document.removeEventListener('mousedown', listen);
      document.removeEventListener('touchstart', listen);
    }
  }, [ref, handler]);
}