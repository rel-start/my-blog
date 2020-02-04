import React, {
  memo
} from 'react';
import styles from './totop-group.module.css';

import useWinScroll from '@assets/scripts/useWinScroll';

/**
 * @name Totop
 */
const Totop = memo(function Totop(props: ITotopProps) {
  const onClick = (event: any) => {
    if (typeof document.body.scrollIntoView === 'function') {
      document.body.scrollIntoView({ behavior: "smooth" });
    } else {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }

  return (
    <div
      onClick={onClick}
      className={styles["totop"]}
    ></div>
  );
})

interface ITotopProps {
  [propsName: string]: any
}

/**
 * @name TotopGroup
 */
export default memo(function TotopWrapper(props: ITotopWrapperProps) {
  const { top } = useWinScroll();
  return (
    <div
      className={styles["totop-group"]}
      title="回到顶部"
      style={{
        opacity: top > 100 ? 1 : 0
      }}
    >
      {
        <Totop />
      }
    </div>
  );
})

interface ITotopWrapperProps {
  [propsName: string]: any
}