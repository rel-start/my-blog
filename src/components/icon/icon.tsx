import React, { memo } from 'react';
import styles from './icon.module.css';
import classnames from 'classnames';
// import deprecate from 'util-deprecate';


const Icon = memo(function Icon(props: IIconProps) {
  const {
    className,
    size,
    glyph,
    children,
  } = props;

  const classes = classnames(className, styles.iconfont);

  if (glyph) {
    return glyph;
  }

  return (
    <i
    {...props}
    className={classes}
    style={{ fontSize: size + "px" }}
    >{children}</i>
  );
});

export default Icon;

interface IIconProps {
  [propsName: string]: any
}
