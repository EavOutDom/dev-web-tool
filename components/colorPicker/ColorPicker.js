import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styles from './ColorPicker.module.css';
import { useOnClickOutside } from "../../lib/useOnClickOutside";

const ColorPicker = ({ color = '#000', onChange, width = 100 }) => {
  const pickerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(pickerRef, close);
  return (<div className={styles.picker}>
    <div
      className={styles.swatch}
      style={{ backgroundColor: color, width: width }}
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