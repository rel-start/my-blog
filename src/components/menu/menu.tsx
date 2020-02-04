import React, { memo, useState, cloneElement, useMemo } from 'react';
import styles from './menu.module.css';
import classnames from 'classnames';

import {MenuContext} from '@assets/scripts/context';

export default memo(function Menu(props: IMenuProps) {
  const {
    className,
    children,
    clickedIndex = -1,
    onClick,
    ...restProps
  } = props;
  
  const [clickedindex, setClickedindex] = useState(clickedIndex);
  
  const classes = useMemo(() => {
    return classnames(styles.menu, className);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuContext.Provider value={{
      clickedindex,
      setClickedindex
    }}>
      <div className={classes} onClick={onClick} {...restProps}>
        {
          children.map((child:any, idx:number) => {
            return cloneElement(child, {
              key: idx,
              currentindex: idx,
              ["data-index"]: idx,
            })
          })
        }
      </div>
    </MenuContext.Provider>
  );
})

interface IMenuProps {
  [propsName: string]: any
}