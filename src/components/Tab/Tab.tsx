import styles from './Tab.module.css';
import React, {
  memo, useState, useCallback
} from 'react';

export default memo(function Tab(props: ITabProps) {

  const {
    datas= [
      '常用笔记',
      '最新笔记',
      '所有笔记'
    ],
    onTabChange = () => {},
  } = props;

  const [curTabIndex, setCurTabIndex] = useState(0);

  const onClick = useCallback((i, event) => {
    if (i === curTabIndex) { return; }
    setCurTabIndex(i);

    onTabChange(i, event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curTabIndex]);

  return (
    <div className={styles["tab"]}>
      {
        datas.map((txt:any, idx:number) => {
          return (
            <span
              key={txt}
              className={idx === curTabIndex ? styles['on'] : ''}
              onClick={(event) => onClick(idx, event)}
            >{txt}</span>
          );
        })
      }
    </div>
  );
})

interface ITabProps {
  [propsName: string]: any
}