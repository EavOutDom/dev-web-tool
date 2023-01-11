import { message } from "antd";
import { useState } from "react"

export const useCopy = (noRef = false) => {
  const [copyText, setCopyText] = useState(null);
  const setCopy = async (value) => {
    let text;
    if (noRef) {
      text = value;
    } else {
      text = value.current.innerHTML;
    }
    if (text.includes('<!-- -->')) {
      text = text.split('<!-- -->').join('');
    }
    if (text.includes('&lt;')) {
      text = text.replaceAll('&lt;', '<');
    }
    if (text.includes('&gt;')) {
      text = text.replaceAll('&gt;', '>');
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