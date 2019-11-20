import React, {
  memo,
} from 'react';

import styles from './text-user.module.css';
import classnames from 'classnames';

export default memo(function TextUser(props: ITextUserProps) {
  const {
    className,
    adimg,
    children,
  } = props;

  const classes = classnames(styles.user, className);

  return (
    <div {...props} className={classes}>
      <img className={styles["adimg"]} src={adimg} alt="" />
      {children}
    </div>
  );
})

interface ITextUserProps {
  [propsName: string]: any
}