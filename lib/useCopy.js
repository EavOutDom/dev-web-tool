import { message } from "antd";
import { useEffect, useState } from "react"

export const useCopy = () => {
  const [copyText, setCopyText] = useState(null);
  const setCopy = async (value) => {
    let text = value.current.innerHTML;
    if (text.includes('<!-- -->')) {
      text = text.split('<!-- -->').join('');
    }
    if (text.includes('<br>')) {
      text = text.split('<br>').join('\n');
    }

    if (!navigator?.clipboard) {
      message.warn('Clipboard not supported')
      return false;
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopyText(text);
      message.success('Copied!')
      return true;
    } catch (error) {
      console.warn('Copy failed', error)
      setCopyText(null)
      return false;
    }
  }
  return [copyText, setCopy];
}