import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import classnames from 'classnames';

import Text from '@components/text/text';
import TextUser from '@components/text-user/text-user';
import {
  ViewCountsIcon, CommentsIcon, LikeNumsIcon
} from '@components/icon/icons';

/**
 * 卡片，笔记列表的每项
 */
export default memo(function Card(props: ICardProps) {
  const {
    img,
    title,
    auther,
    adimg,
    viewCounts,
    comments,
    likeNums,
    className,
  } = props;

  const classes = classnames(styles["card"], className);

  return (
    <li className={classes}>
      <div className={styles["shade"]}></div>
      <Link className={styles["img"]} to="/">
        <img src={img} alt="" />
      </Link>
      <div className={styles["info"]}>
        <Text title={title} className={styles["title"]} types="ellipsis">{title}</Text>
        <div className={styles["msg"]}>
          <Text className={styles["view-counts"]} title="阅读数" icons={<ViewCountsIcon />}>{viewCounts}</Text>
          <Text className={styles["comments"]} title="评论数" icons={<CommentsIcon />}>{comments}</Text>
          <Text className={styles["like-nums"]} title="点赞数" icons={<LikeNumsIcon />}>{likeNums}</Text>
        </div>
        <div className={styles["auther"]}>
          <TextUser adimg={adimg}>
            <Text title={auther}>{auther}</Text>
          </TextUser>
        </div>
      </div>
    </li>
  );
})

interface ICardProps {
  [propsName: string]: any
}