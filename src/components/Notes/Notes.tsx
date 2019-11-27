import React, {
  memo, useState
} from 'react';
import styles from './notes.module.css';
import classnames from 'classnames';

import Tab from '@components/tab/tab';
import Pager from '@components/pager/pager';
import NotesList from '@components/notes-list/notes-list';

/**
 * 公告
 */
const Bulletin = memo(function Bulletin(props: IbulletinProps) {
  const [index, setIndex] = useState(0);

  const onClick = (n: number) => {
    setIndex(n);
  }

  return (
    <ul className={styles["bulletin"]}>
      <li className={classnames({ [styles.open]: index === 0 })}>
        <i onClick={() => onClick(0)} className={styles["icon-star"]}>&#xe606;</i>
        <dfn>9月25日更新登录注册！ </dfn>
      </li>
      <li className={classnames({ [styles.open]: index === 1 })}>
        <i onClick={() => onClick(1)} className={styles["icon-warn"]}>&#xe60f;</i>
        <dfn>开启你的第一次即刻！ </dfn>
      </li>
      <li className={classnames({ [styles.open]: index === 2 })}>
        <i onClick={() => onClick(2)} className={styles["icon-heart"]}>&#xe755;</i>
        <dfn>趋势并不是指时髦的~ </dfn>
      </li>
    </ul>
  );
})

interface IbulletinProps {
  [propsName: string]: any
}

/**
 * 笔记、文章
 */
export default function Notes(props: INotesProps) {

  return (
    <div className={styles["notes-wrapper"]}>
      <header className={styles["notes__head"]}>
        <div className={styles["tab-wrapper"]}>
          <Tab />
        </div>
        <Bulletin />
      </header>

      <NotesList />
      <div className={styles["notes-pagination"]}>
        <Pager
          className={styles["pagination-wrapper"]}
          onPageChange={(i: any) => {
            console.log('第' + i + '页')
          }}
        ></Pager>
      </div>
    </div>
  );
}

interface INotesProps {
  [propsName: string]: any
}
