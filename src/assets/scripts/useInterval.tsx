import { useEffect, useRef } from 'react';

export default function useInterval(before: Function, cb: Function, interval = 1000, array: Array<any>) {
  console.log(array)
  let id = useRef<any>();
  useEffect(() => {
    id.current = setInterval(() => {
      cb()
    }, interval)

    return () => {
      clearInterval(id.current)
    }
  }, [...array])

  return id.current;
}