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
    children,
    className,
    active,

    icons,
    dropdown,
    href,
  }: any = props;

  // 是否是a标签
  const isLink = !!href;

  const Tag = isLink ? 'a' : 'button';

  // Button样式：主要是以theme来区分
  const classes = classname(
    styles.button,
    className,
    styles[theme],
    {
      [styles.active]: active
    }
  );

  // Button的内容
  const content = (
    <span className={styles.content}>
      {icons}
      {children && (
        <>{children}</>
      )}
      {dropdown}
    </span>
  );

  return (
    <Tag
      {...(isLink ? null : { type: 'button', href })}
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