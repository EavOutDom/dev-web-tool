import { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styles from './ColorPicker.module.css';

const ColorPicker = ({ color = '#000', onChange }) => {
  console.log(color);
  const pickerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(pickerRef, close);
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
  return (<div className={styles.picker}>
    <div
      className={styles.swatch}
      style={{ backgroundColor: color }}
      onClick={() => setIsOpen(true)}
    />
    {isOpen && (
      <div className={styles.popover} ref={pickerRef}>
        <HexColorPicker color={color} onChange={onChange} />
      </div>
    )}
  </div>);
}

export default ColorPicker;