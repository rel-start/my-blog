import React, {
  memo,
} from 'react';
import styles from './button.module.css';
import classname from 'classnames';
import Theme from '@assets/scripts/theme';


/**
 * @name Button
 */
export default memo(function TButton(props: IButtonProps) {
  const {
    theme = Theme.LIGHT,
    onMouseDown = () => { },
    children = "1",
    className,
    active,
  }: any = props;

  const Tag = 'button';

  // Button样式：主要是以theme来区分
  const classes = classname(
    styles.button,
    className,
    styles[theme],
    {
      [styles.active]: active
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
});

interface IButtonProps {
  theme?: string,
  onMouseDown?: Function,
  children?: any,
  className?: string,
  active?: any,
  [propsName: string]: any,
}