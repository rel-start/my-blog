import React, {
  memo,
} from 'react';
import styles from './footer.module.css';

import Icon from '@components/icon/icon';

export default memo(function Footer(props: IFooterProps) {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer"]}>
        <Icon className={styles["logo"]} children="&#xf16f;" />
        <div className={styles["copy"]}>本博客的UI参考至 ui中国</div>
      </div>
    </div>
  );
})

interface IFooterProps {
  [propsName: string]: any
}
