import React, {
  memo,
} from 'react';
import { Link } from 'react-router-dom';
import Tab from '../Tab/Tab';
import styles from './Likes.module.css';
import TextUser from '../text-user/text-user';
import Text from '../text/text';
import Pager from '../pager/pager';
import dayjs from 'dayjs';


/**
 *  ArticleItem
 */
const ArticleItem = memo(function articleItem(props: IarticleItemProps) {
  const {
    img,
    title,
    content,
    times,
    adimg,
    auther,
  } = props;

  return (
    <li className={styles["article-item"]}>
      <div className={styles["shade"]}></div>
      <Link to="/" className={styles["info"]}>
        <div className={styles["img-wrapper"]}>
          <img className={styles["img"]} src={img} alt="" />
        </div>
        <div className={styles["msg"]}>
          <div className={styles["head"]}>
            <h3 className={styles["title"]}>{title}</h3>
            <Text className={styles["times"]} title="阅读数" codes="&#xe71a;" types="icons">{dayjs(times).format(' MM-DD HH:mm')}</Text>
          </div>
          <p className={styles["description"]}>{content}</p>
          <TextUser adimg={adimg}>
            <Text className={styles["txt"]} title={auther} types="ellipsis">{auther}</Text>
          </TextUser>
        </div>
      </Link>
    </li>
  );
})

interface IarticleItemProps {
  [propsName: string]: any
}

const articles = [
  {
    img: require('@assets/imgs/article-img.gif'),
    title: '简单几招搞定作品集&设计汇报 (带案例分析)',
    content: '恰好这段时间是跳槽季，因此想了很久，写下这篇如何做作品集的文章，希望对那些正在找工作，或者打算看新机会的小伙伴们有所帮助。',
    times: Date.now(),
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: 'cl',
  },
  {
    img: require('@assets/imgs/article-img.gif'),
    title: '简单几招搞定作品集&设计汇报 (带案例分析)',
    content: '恰好这段时间是跳槽季，因此想了很久，写下这篇如何做作品集的文章，希望对那些正在找工作，或者打算看新机会的小伙伴们有所帮助。',
    times: Date.now(),
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: 'cl',
  },
  {
    img: require('@assets/imgs/article-img.gif'),
    title: '简单几招搞定作品集&设计汇报 (带案例分析)',
    content: '恰好这段时间是跳槽季，因此想了很久，写下这篇如何做作品集的文章，希望对那些正在找工作，或者打算看新机会的小伙伴们有所帮助。',
    times: Date.now(),
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: 'cl',
  },
  {
    img: require('@assets/imgs/article-img.gif'),
    title: '简单几招搞定作品集&设计汇报 (带案例分析)',
    content: '恰好这段时间是跳槽季，因此想了很久，写下这篇如何做作品集的文章，希望对那些正在找工作，或者打算看新机会的小伙伴们有所帮助。',
    times: Date.now(),
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: 'cl',
  },
]

/**
 * AsideItem
 */
const AsideItem = memo(function AsideItem(props: IAsideItemProps) {
  const {
    img,
    url,
  } = props;

  return (
    <a href={url} className={styles["img-box"]} target="_blank" rel="noopener noreferrer">
      <img className={styles["pic"]} src={img} alt=""/>
    </a>
  );
})

interface IAsideItemProps {
  [propsName: string]: any
}

const asides = [
  {
    img: require('@assets/imgs/aside-img.png'),
    url: 'https://study.163.com/course/introduction/1004014054.htm',
  },
  {
    img: require('@assets/imgs/aside-img.png'),
    url: 'https://study.163.com/course/introduction/1004014054.htm',
  },
  {
    img: require('@assets/imgs/aside-img.png'),
    url: 'https://study.163.com/course/introduction/1004014054.htm',
  },
]

/**
 * Likes
 */
export default memo(function Likes(props: ILikesProps) {

  return (
    <div className={styles["likes-wrapper"]}>
      <div className={styles["likes"]}>
        {/*left*/}
        <div className={styles["likes-article"]}>
          <div className={styles["tab-wrapper"]}>
            <Tab
              datas={[
                '感兴趣文章',
                '需实现特效',
              ]}
            />
          </div>

          <div className={styles["article-box"]}>
            <ul className={styles["article-list"]}>
              {
                articles.map((article, idx) => {
                  return <ArticleItem {...article} key={idx} />
                })
              }
            </ul>

            <Pager
              className={styles["pagination-wrapper"]}
              onPageChange={(i: any) => {
                console.log('第' + i + '页')
              }}
            ></Pager>
          </div>
        </div>

        {/*right*/}
        <div className={styles["likes-aside"]}>
          <div className={styles["aside-head"]}>常用友链接</div>

          <div className={styles["aside-list"]}>
            {
              asides.map((aside, idx) => {
                return <AsideItem key={idx} {...aside} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
})

interface ILikesProps {
  [propsName: string]: any
}