import './Notes.css';
import Tab from '@components/Tab/Tab';
import classnames from 'classnames';
import React, {
  memo, useState,
} from 'react';
import { Link } from 'react-router-dom';

/**
 * 公告
 */
const Bulletin = memo(function Bulletin(props: IbulletinProps) {
  const [index, setIndex] = useState(0);

  const onClick = (n: number) => {
    setIndex(n);
  }

  return (
    <ul className="bulletin">
      <li className={classnames({ 'open': index === 0 })}>
        <i onClick={() => onClick(0)} className="icon-star">&#xe606;</i>
        <dfn>9月25日更新登录注册！ </dfn>
      </li>
      <li className={classnames({ 'open': index === 1 })}>
        <i onClick={() => onClick(1)} className="icon-warn">&#xe60f;</i>
        <dfn>开启你的第一次即刻！ </dfn>
      </li>
      <li className={classnames({ 'open': index === 2 })}>
        <i onClick={() => onClick(2)} className="icon-heart">&#xe755;</i>
        <dfn>趋势并不是指时髦的~ </dfn>
      </li>
    </ul>
  );
})

interface IbulletinProps {
  [propsName: string]: any
}

/**
 * 分页器
 */
const NotesPagination = memo(function NotesPagination(props: NotesPaginationProps) {
  const {

  } = props;

  return (
    <ul className="pagination-wrapper">
      <li>
        <Link className="on" to="/">1</Link>
      </li>
      <li>
        <Link to="/">2</Link>
      </li>
      <li>
        <Link to="/">3</Link>
      </li>
      <li>
        <Link to="/">...</Link>
      </li>
    </ul>
  );
})

interface NotesPaginationProps {
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
    <li className="notes-item">
      <div className="shade"></div>
      <Link className="img" to="/">
        <img src={img} />
      </Link>
      <div className="info">
        <h4 className="title ellipsis" title={title}>{title}</h4>
        <div className="msg">
          <span className="view-counts">
            <i className="icon-eye" title="阅读数">&#xe722;</i>
            {viewCounts}
          </span>
          <span className="comments">
            <i className="icon-comment" title="评论数">&#xe64d;</i>
            {comments}
          </span>
          <span className="like-nums">
            <i className="icon-leaf" title="点赞数">&#xe69f;</i>
            {likeNums}
          </span>
        </div>
        <div className="auther">
          <img className="adimg" src={adimg} />
          <span title={auther}>{auther}</span>
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
    img: 'https://img.ui.cn/data/vip/1572859382.jpeg',
    title: '设计规范云设计规范云设计规范云设计规范云设计规范云',
    auther: '蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作蓝湖产品设计协作',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 200,
    comments: 10,
    likeNums: 5,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: 'https://img.ui.cn/data/vip/1572859382.jpeg',
    title: '设计规范云',
    auther: '蓝湖产品设计协作',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 200,
    comments: 10,
    likeNums: 5,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
  {
    img: 'https://img.ui.cn/data/file/7/4/6/2818647.jpg',
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: 'https://imgavater.ui.cn/avatar/8/5/9/1/291958.jpg?imageMogr2/auto-orient/crop/!1239x1239a0a0/thumbnail/60x60',
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  }
];

/**
 * 笔记列表
 */
const NotesList = memo(function NoteList(props: INoteListProps) {
  const {

  } = props;

  return (
    <ul className="notes-list">
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
  const {

  } = props;

  return (
    <div className="notes-wrapper w1180">
      <header className="notes__head clearfix">
        <div className="tab-wrapper">
          <Tab />
        </div>
        <Bulletin />
      </header>

      <NotesList />
      <div className="notes-pagination">
        <NotesPagination />
      </div>
    </div>
  );
}

interface INotesProps {
  [propsName: string]: any
}
