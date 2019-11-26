import {
  useState,
  useEffect,
} from 'react';
import { throttle } from 'lodash-es';

export default function useWinScroll() {
  const [top, setTop] = useState(document.documentElement.scrollTop);

  const onScroll = () => {
    setTop(document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(onScroll, 300), false);

    return () => {
      window.removeEventListener("scroll", throttle(onScroll, 300), false);
    }
  }, []);

  return { top };
}
