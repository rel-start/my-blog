import React, {
  memo, useEffect, useMemo
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '@components/header/header';
import Totops from '@components/totop-group/totop-group';
import Footer from '@components/footer/footer';
import { Portfolio } from '@components/notes/notes';
import ListFilter from '@components/list-filter/list-filter';

import {
  setListFilterMenu1,
  setListFilterMenu2,
  setListFilterMenu3,
} from '@reducers/actions.js';

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
const List = memo(function List(props: IListProps) {
  const {
    listFilterMenu1,
    listFilterMenu2,
    listFilterMenu3,
    dispatch,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const listFilterCbs = useMemo(() => {
    return bindActionCreators({
      setListFilterMenu1,
      setListFilterMenu2,
      setListFilterMenu3,
    }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <ListFilter
        listFilterMenu1={listFilterMenu1}
        listFilterMenu2={listFilterMenu2}
        listFilterMenu3={listFilterMenu3}
        {...listFilterCbs}
      />
      <Portfolio list={data} />
      <Footer />
      <Totops />
    </>
  );
});

export default connect(
  function mapStateProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(List);

interface IListProps {
  [propsName: string]: any
}

