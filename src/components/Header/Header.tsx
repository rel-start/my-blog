import React, {
  memo,
  useState,
} from 'react';
import styles from './header.module.css';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import Icon from '@components/icon/icon';

/**
 * 登录
 */
const HLogin = memo(function HLogin(props: ILoginProps) {

  return (
    <div className={styles["h-login"]}>
      <Link to="/login"><Icon className={styles["h-login-icon"]} children="&#xe63c;" />登录</Link>
    </div>
  );
})

interface ILoginProps {
  [propsName: string]: any
}

/**
 * 头部搜索组件
 */
const HSearch = memo(function HSearch(props: IHSearchProps) {

  const [on, setOn] = useState(false);

  return (
    <form className={styles["h-search"]}>
      <Icon className={styles["icon-search"]} onClick={() => setOn(!on)} children="&#xe7c1;" />
      <div className={
        classnames(styles['input-group'], { [styles.on]: on })
      }>
        <input type="text" placeholder="搜索笔记" />
      </div>
    </form>
  );
})

interface IHSearchProps {
  [propsName: string]: any
}

/**
 * 网站主导航中的二级列表
 */
const SubNav = memo(function SubNav(props: ISubNavProps) {
  const {
    items
  } = props;

  return (
    <div className={styles.subnav}>
      <div className={styles["subnav__item"]}>
        {
          items.map((item, idx) => {
            const { text, url } = item;
            return (
              <Link to={url} key={idx}>{text}</Link>
            );
          })
        }
      </div>
    </div>
  );
})

interface ISubNavProps {
  items: Array<{ text: string, url: string }>
}

/**
 * 网站主导航
 */
const Navbar = memo(function Navbar(props: INavbarProps) {

  return (
    <ul className={styles["navbar"]}>
      <li className={styles["navbar__item"]}><NavLink exact to="/" activeClassName={styles["selected"]}>首页</NavLink></li>
      <li className={styles["navbar__item"]}>
        <NavLink to="/list" className={styles["more"]} activeClassName={styles["selected"]}>笔记</NavLink>
        <SubNav items={[
          {
            text: 'Java',
            url: '/list/list1',
          },
          {
            text: 'React',
            url: '/list/list2',
          }
        ]} />
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink exact to="/ab" activeClassName={styles["selected"]}>练习</NavLink>
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink exact to="/cd" activeClassName={styles["selected"]}>作品</NavLink>
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink to="/ee" className={styles["more"]} activeClassName={styles["selected"]}>学习</NavLink>
        <SubNav items={[
          {
            text: '感兴趣的文章',
            url: '/ee/ee1',
          },
          {
            text: '需实现特效',
            url: '/ee/ee2',
          }
        ]} />
      </li>
      <li className={styles["navbar__item"]}>
        <NavLink exact to="/dd" activeClassName={styles["selected"]}>个人难题</NavLink>
      </li>
    </ul >
  );
})

interface INavbarProps {
  [propsName: string]: any
}

/**
 * 网站头部
 */
export default memo(function Header(props: IHeaderProps) {

  return (
    <div className={styles["header"]}>
      <div className={styles["header-wrapper"]}>
        <h1><Icon children="&#xf16f;" className={styles.logo} /></h1>
        <Navbar />
        <HLogin />
        <HSearch />
      </div>
    </div>
  );
});

interface IHeaderProps {
  [propsName: string]: any
}