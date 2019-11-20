import React, {
  memo,
} from 'react';
import classname from 'classnames';

import Theme from '@assets/scripts/theme';

import styles from './button.module.css';


/**
 * @name Button
 */
export default memo(function TButton(props: IButtonProps) {
  const {
    theme = Theme.LIGHT,
    onMouseDown = () => { },
    children,
    className,
    active,
    isusedefaultstyle = true,
  }: any = props;

  const Tag = 'button';

  const classes = classname(
    styles.button,
    className,
    styles[theme],
    {
      [styles.active]: active,
      [styles.default]: isusedefaultstyle
    }
  );

  const content = (
    <span>
      {
        children && (
          <>{children}</>
        )
      }
    </span>
  );

  return (
    <Tag
      type='button'
      className={classes}
      {...props}
      onMouseDown={onMouseDown}
    >
      {content}
    </Tag>
  );
})

interface IButtonProps {
  theme?: string,
  onMouseDown?: Function,
  children?: any,
  className?: string,
  active?: any,
  [propsName: string]: any,
}