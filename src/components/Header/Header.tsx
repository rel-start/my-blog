import './Header.css';
import React, {
  memo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

/**
 * 登录
 */
const HLogin = memo(function HLogin(props: ILoginProps) {

  return (
    <div className="h-login">
      <Link to="/">登录</Link>
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
    <form className="h-search">
      <i className="icon-search" onClick={() => setOn(!on)} >&#xe7c1;</i>
      <div className={
        classnames('input-group', { on })
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
    <div className="subnav">
      <div className="subnav__item">
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
    <ul className="navbar clearfix">
      <li className="navbar__item"><Link to="/">首页</Link></li>
      <li className="navbar__item"><Link to="/">学习</Link></li>
      <li className="navbar__item">
        <Link to="/" className="more">更多更多</Link>
        <SubNav items={[
          {
            text: '线下课程1',
            url: '/',
          },
          {
            text: '线上课程1',
            url: '/',
          }
        ]} />
      </li>
      <li className="navbar__item">
        <Link to="/" className="more">更多</Link>
        <SubNav items={[
          {
            text: '线下课程2',
            url: '/',
          },
          {
            text: '线上课程2',
            url: '/',
          }
        ]} />
      </li>
    </ul>
  );
})

interface INavbarProps {
  [propsName: string]: any
}

/**
 * 网站头部
 */
export default function Header(props: IHeaderProps) {

  return (
    <div className="header">
      <div className="w1180 header-wrapper clearfix">
        <h1><i className="logo">&#xf16f;</i></h1>
        <Navbar />
        <HLogin />
        <HSearch />
      </div>
    </div>
  );
}

interface IHeaderProps {
  [propsName: string]: any
}