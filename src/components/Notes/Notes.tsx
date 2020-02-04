import React, {
  memo, useState
} from 'react';
import styles from './notes.module.css';
import classnames from 'classnames';

import Tab from '@components/tab/tab';
import Pager from '@components/pager/pager';
import NotesList from '@components/notes-list/notes-list';
import Icon from '@components/icon/icon';

/**
 * @page Home
 * @description 公告
 */
const Bulletin = memo(function Bulletin(props: IbulletinProps) {
  const [index, setIndex] = useState(0);

  const onClick = (n: number) => {
    setIndex(n);
  }

  return (
    <ul className={styles["bulletin"]}>
      <li className={classnames({ [styles.open]: index === 0 })}>
        <Icon onClick={() => onClick(0)} className={styles["icon-star"]} children="&#xe606;" />
        <dfn>9月25日更新登录注册！ </dfn>
      </li>
      <li className={classnames({ [styles.open]: index === 1 })}>
        <Icon onClick={() => onClick(1)} className={styles["icon-warn"]} children="&#xe60f;" />
        <dfn>开启你的第一次即刻！ </dfn>
      </li>
      <li className={classnames({ [styles.open]: index === 2 })}>
        <Icon onClick={() => onClick(2)} className={styles["icon-heart"]} children="&#xe755;" />
        <dfn>趋势并不是指时髦的~ </dfn>
      </li>
    </ul>
  );
})

interface IbulletinProps {
  [propsName: string]: any
}

/**
 * @page Home
 * @description 笔记、文章
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

      <NotesList canvas />
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

/**
 * @component List
 * @description 作品集
 */
export const Portfolio = memo(function Portfolio(props: IPortfolioProps) {
  const { list } = props;
  return (
    <div className={styles["notes-wrapper"]}>
      <NotesList list={list} />

      <div className={styles["notes-pagination"]}>
        <Pager
          className={styles["pagination-wrapper"]}
          shape="square"
          onPageChange={(i: any) => {
            console.log('第' + i + '页')
          }}
        ></Pager>
      </div>
    </div>
  );
})

interface IPortfolioProps {
  [propsName: string]: any
}