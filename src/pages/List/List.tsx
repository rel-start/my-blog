import React, {
  memo,
} from 'react';
// import styles from './List.module.css';

import Header from '@components/header/header';
import Totops from '@components/totop-group/totop-group';
import Footer from '@components/footer/footer';
import {Portfolio} from '@components/notes/notes';

const data = [
  {
    img: require('@assets/imgs/notes-face.png'),
    title: '发动机萨里发生的咖啡里的世界解放路的撒娇发动机萨里发生的咖啡里的世界解放路的撒娇发动机萨里发生的咖啡里的世界解放路的撒娇发动机萨里发生的咖啡里的世界解放路的撒娇',
    auther: '木土君木土君木土君木土君木土君木土君木土君木土君',
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
    title: '近期智能项目复盘',
    auther: '木土君',
    adimg: require('@assets/imgs/notes-auther.png'),
    viewCounts: 1024,
    comments: 50,
    likeNums: 500,
  },
];



/**
 * List 页面
 */
export default memo(function List(props: IListProps) {

  return (
    <>
      <Header />
      <Portfolio list={data} />
      <Footer />
      <Totops />
    </>
  );
})

interface IListProps {
  [propsName: string]: any
}

