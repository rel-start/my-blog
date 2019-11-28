import React, {
  memo,
} from 'react';
import styles from './practise.module.css';
import { Link } from 'react-router-dom';

import TextUser from '../text-user/text-user';
import Text from '../text/text';
import {
  GithubIcon, CodesanboxIcon
} from '@components/icon/icons';

/**
 * PractiseItem
 */
const PractiseItem = memo(function PractiseItem(props: IPractiseItemProps) {
  const {
    src,
    github,
    codeSandbox,
    adimg,
    auther,
  } = props;

  return (
    <div
      className={styles['practise-item']}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      <div className={styles["shade"]}></div>
      <div className={styles["info"]}>
        <TextUser adimg={adimg}>
          <Text className={styles["txt"]} title={auther} types="ellipsis">{auther}</Text>
        </TextUser>
        <p className={styles["links"]}>

          <Text href={github} icons={<GithubIcon/>}>github</Text>
          <Text href={codeSandbox} icons={<CodesanboxIcon/>}>codeSandbox</Text>
        </p>
      </div>
    </div>
  );
})

interface IPractiseItemProps {
  [propsName: string]: any
}

const practiseData = [
  {
    src: require('@assets/imgs/practise-item1.gif'),
    github: 'https://github.com/',
    codeSandbox: 'https://codesandbox.io/',
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: '断点'
  },
  {
    src: require('@assets/imgs/practise-item2.gif'),
    github: 'https://github.com/',
    codeSandbox: 'https://codesandbox.io/',
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: '断点'
  },
  {
    src: require('@assets/imgs/practise-item1.gif'),
    github: 'https://github.com/',
    codeSandbox: 'https://codesandbox.io/',
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: '断点'
  },
  {
    src: require('@assets/imgs/practise-item2.gif'),
    github: 'https://github.com/',
    codeSandbox: 'https://codesandbox.io/',
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: '断点'
  },
  {
    src: require('@assets/imgs/practise-item1.gif'),
    github: 'https://github.com/',
    codeSandbox: 'https://codesandbox.io/',
    adimg: require('@assets/imgs/notes-auther.png'),
    auther: '断点'
  },
];

/**
 * 个人练习
 */
export default memo(function Practise(props: IPractiseProps) {
  return (
    <div className={styles['practise-wrapper']}>
      <div className={styles['practise']}>
        <header className={styles['practise-head']}>
          <span className={styles.title}>个人练习</span>
          <Link to="/" className={styles.more}>更多</Link>
        </header>

        <ul className={styles['practise-list']}>
          {
            practiseData.map((item, idx) => {
              return <PractiseItem {...item} key={idx} />
            })
          }
        </ul>
      </div>
    </div>
  );
})

interface IPractiseProps {
  [propsName: string]: any
}