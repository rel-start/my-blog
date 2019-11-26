import React, {
  memo,
} from 'react';
import useWinScroll from '@assets/scripts/useWinScroll';

import styles from './totop-group.module.css';

/**
 * @name Totop
 */
const Totop = memo(function Totop(props: ITotopProps) {
  const onClick = (event: any) => {
    document.body.scrollIntoView({ behavior: "smooth" });
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