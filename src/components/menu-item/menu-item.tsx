import React, { memo, useCallback, useState, useContext, useMemo } from 'react';
import styles from './menu-item.module.css';
import classnames from 'classnames';

import { MenuContext } from '@assets/scripts/context';

export default memo(function MenuItem(props: IMenuItemProps) {
  const {
    className,
    children,
    onClick,
    currentindex,
    ...restProps
  } = props;

  const [curIndex, setCurIndex] = useState(-2);

  const {
    clickedindex,
    setClickedindex
  } = useContext(MenuContext);

  const clickHandler = useCallback((e) => {
    const curIndex = e.target.dataset.index;
    setCurIndex(curIndex);
    setClickedindex(curIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curIndex]);

  const classes = useMemo(() => {
    return classnames(styles["menu-item"], className, {
      [styles.active]: currentindex === clickedindex || clickedindex === curIndex
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedindex, curIndex]);

  return (
    <div
      className={classes}
      data-index={currentindex}
      onClick={clickHandler}
      {...restProps}
    >
      {children}
    </div>
  );
})

interface IMenuItemProps {
  [propsName: string]: any
}