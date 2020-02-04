import {
  useState,
  useEffect,
} from 'react';
import { throttle } from 'lodash-es';

export default function useWinScroll(delay = 300) {
  const [top, setTop] = useState(document.documentElement.scrollTop || document.body.scrollTop);
  const [left, setLeft] = useState(document.documentElement.scrollLeft || document.body.scrollLeft);

  const onScroll = throttle(() => {
    setTop(document.documentElement.scrollTop);
    setLeft(document.documentElement.scrollLeft);
  }, delay);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { top, left };
}
