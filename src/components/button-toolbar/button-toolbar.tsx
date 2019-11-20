import React, {
  memo,
} from 'react';
import classnames from 'classnames';

import styles from './button-toolbar.module.css';

/**
 * @name Button Toolbar
 */
export default memo(function ButtonToolbar(props: IButtonToolbarProps) {
  const {
    className,
  } = props;

  const classes = classnames(styles.buttonToolbar, className);

  return (
    <div
      {...props}
      className={classes}
    />
  );
})

interface IButtonToolbarProps {
  className?: string,
  children?: any,
}