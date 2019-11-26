import {
  useState,
  useEffect,
} from 'react';
import { throttle } from 'lodash-es';

export default function useWinScroll() {
  const [top, setTop] = useState(document.documentElement.scrollTop);

  const onScroll = throttle(() => {
    setTop(document.documentElement.scrollTop);
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);

    return () => {
      window.removeEventListener("scroll", onScroll, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { top };
}
