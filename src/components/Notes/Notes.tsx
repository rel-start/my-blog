import styles from './Notes.module.css';
import Tab from '@components/Tab/Tab';
import classnames from 'classnames';
import React, {
  memo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import Pager from '../pager/pager';
import Text from '../text/text';
import TextUser from '../text-user/text-user';

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
 * 笔记 项
 */
const NotesItem = memo(function NotesItem(props: INotesItemProps) {
  const {
    img,
    title,
    auther,
    adimg,
    viewCounts,
    comments,
    likeNums,
  } = props;

  return (
    <li className={styles["notes-item"]}>
      <div className={styles["shade"]}></div>
      <Link className={styles["img"]} to="/">
        <img src={img} alt="" />
      </Link>
      <div className={styles["info"]}>
        <Text title={title} className={styles["title"]} types="ellipsis">{title}</Text>
        <div className={styles["msg"]}>
          <Text className={styles["view-counts"]} title="阅读数" codes="&#xe722;" types="icons">{viewCounts}</Text>
          <Text className={styles["comments"]} title="评论数" codes="&#xe64d;" types="icons">{comments}</Text>
          <Text className={styles["like-nums"]} title="点赞数" codes="&#xe69f;" types="icons">{likeNums}</Text>
        </div>
        <div className={styles["auther"]}>
          <TextUser adimg={adimg}>
            <Text title={auther} types="ellipsis">{auther}</Text>
          </TextUser>
        </div>
      </div>
    </li>
  );
})

interface INotesItemProps {
  [propsName: string]: any
}

const notes = [
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '设计规范云设计规范云设计规范云设计规范云设计规范云',
    auther: '蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 200,
    comments: 10,
    likeNums: 5,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '设计规范云',
    auther: '蓝湖产品设计协作',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 200,
    comments: 10,
    likeNums: 5,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  }
];

/**
 * 笔记列表
 */
const NotesList = memo(function NoteList(props: INoteListProps) {

  return (
    <ul className={styles["notes-list"]}>
      {
        notes.map((note: any, idx: number) => {
          return (
            <NotesItem {...note} key={idx} />
          );
        })
      }
    </ul>
  );
})

interface INoteListProps {
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
