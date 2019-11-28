import React, { memo } from 'react';
import styles from './notes-list.module.css';

import CanvasItem from '@components/notes-canvas/notes-canvas';
import NotesItem from '@components/card/card';

const notes = [
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


export default memo(function NoteList(props: INoteListProps) {
  const {
    list = notes,
    canvas,
  } = props;

  return (
    <ul className={styles["notes-list"]}>
      {canvas && <CanvasItem />}
      {
        list.map((note: any, idx: number) => {
          return (
            <NotesItem className={styles["notes-item"]} {...note} key={idx} />
          );
        })
      }
    </ul>
  );
})

interface INoteListProps {
  [propsName: string]: any
}