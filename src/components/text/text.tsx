import React, {
  memo,
} from 'react';
import styles from './text.module.css';
import classnames from 'classnames';

export default memo(function Text(props: ITextProps) {
  const {
    className,
    children,
    types,
    codes,
    href,
  } = props;

  const classes = classnames(className, {
    [styles.ellipsis]: types === 'ellipsis',
    [styles.icons]: types === 'icons',
  });

  const Tag = href ? 'a' : 'dfn';

  return (
    <Tag
      {...props}
      {...href ? { href } : ''}
      className={classes}
    >
      {types === 'icons' && <i className={styles.iconfont}>{codes}</i>}
      {children}
    </Tag>
  );
})

interface ITextProps {
  [propsName: string]: any
}
