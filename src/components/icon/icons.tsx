import React from 'react';
import styles from './icon.module.css';
import Icon from '@components/icon/icon';
import classnames from 'classnames';

// // 网站logo
// export const SiteLogo = <Icon children="&#xf16f;" />;
// // header组件登录的人形
// export const HeaderLoginIcon = <Icon children="&#xe63c;" />;
export const HeaderNavIcon = iconHOC(<>&#xe604;</>);

// // bulletin组件
// export const BulletinStarIcon = <Icon children="&#xe606;" />;
// export const BulletinWarnIcon = <Icon children="&#xe60f;" />;
// export const BulletinHeartIcon = <Icon children="&#xe755;" />;

// card组件 阅读数、评论数、点赞数
export const ViewCountsIcon = iconHOC(<>&#xe722;</>);
export const CommentsIcon = iconHOC(<>&#xe64d;</>);
export const LikeNumsIcon = iconHOC(<>&#xe69f;</>);

// practise组件 github、codesanbox
export const GithubIcon = iconHOC(<>&#xe722;</>);
export const CodesanboxIcon = iconHOC(<>&#xe69f;</>);

// likes组件 时钟
export const LikesTimeIcon = iconHOC(<>&#xe71a;</>);

function iconHOC(child: any) {
  return (props: any) => {
    const { className } = props;
    return <Icon {...props} className={classnames(styles["icon-mr3"], className)} children={child}/>;
  };
}