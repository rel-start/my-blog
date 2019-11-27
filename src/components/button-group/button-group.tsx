import React, {
  memo,
} from 'react';
import classnames from 'classnames';
import styles from './button-group.module.css';

/**
 * @name Button Group
 */
export default memo(function ButtonGroup(props: IButtonGroupProps) {
  const {
    className,
  } = props;

  const classes = classnames(styles.buttonGroup, className);

  return (
    <div
      {...props}
      className={classes}
    />
  );
})

interface IButtonGroupProps {
  className?: string,
  children?: any,
}