import React, {
  memo,
} from 'react';
import styles from './text.module.css';
import classnames from 'classnames';

export default memo(function Text(props: ITextProps) {
  const {
    className,
    children,
    icons,
    href,
    types,
  } = props;

  const classes = classnames(className, {
    [styles.ellipsis]: types==='ellipsis',
    [styles.icons]: icons,
  });

  const Tag = href ? 'a' : 'dfn';

  return (
    <Tag
      {...props}
      {...href ? { href } : ''}
      className={classes}
    >
      {icons}
      {children}
    </Tag>
  );
})

interface ITextProps {
  [propsName: string]: any
}
