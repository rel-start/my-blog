import React from 'react';
import styles from './icon.module.css';
import Icon from '@components/icon/icon';
import classnames from 'classnames';

// // 网站logo
// export const SiteLogo = <Icon children="&#xf16f;" />;
// // header组件登录的人形
// export const HeaderLoginIcon = <Icon children="&#xe63c;" />;
export const DropDownIcon = iconHOC(<>&#xe604;</>, 'dropdown');

// // bulletin组件
// export const BulletinStarIcon = <Icon children="&#xe606;" />;
// export const BulletinWarnIcon = <Icon children="&#xe60f;" />;
// export const BulletinHeartIcon = <Icon children="&#xe755;" />;

// card组件 阅读数、评论数、点赞数
export const ViewCountsIcon = iconHOC(<>&#xe722;</>, 'text');
export const CommentsIcon = iconHOC(<>&#xe64d;</>, 'text');
export const LikeNumsIcon = iconHOC(<>&#xe69f;</>, 'text');

// practise组件 github、codesanbox
export const GithubIcon = iconHOC(<>&#xe722;</>, 'text');
export const CodesanboxIcon = iconHOC(<>&#xe69f;</>, 'text');

// likes组件 时钟
export const LikesTimeIcon = iconHOC(<>&#xe71a;</>, 'text');

function iconHOC(child: any, type: string) {

  return (props: any) => {
    const { className, restProps } = props;

    const classes = classnames(className, {
      // icon后面跟文字的话 中间需要有3px间隙
      [styles["icon-mr3"]]: type === 'text',
      // dropdown所需的样式
      [styles["icon-dropdown"]]: type === 'dropdown',
    });
    return <Icon {...restProps} className={classes} children={child} />;
  };
}