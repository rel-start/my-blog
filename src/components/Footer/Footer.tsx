import React, {
  memo,
} from 'react';

import styles from './footer.module.css';

export default memo(function Footer(props: IFooterProps) {

  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer"]}>
        <i className={styles["logo"]}>&#xf16f;</i>
        <div className={styles["copy"]}>本博客的UI参考至 ui中国</div>
      </div>
    </div>
  );
})

interface IFooterProps {
  [propsName: string]: any
}
