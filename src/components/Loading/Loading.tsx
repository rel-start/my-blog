import React,{memo} from 'react';

import styles from './Loading.module.css';

export default memo(function Loading(props: ILoadingProps) {

  return (
    <div className={styles["loading"]}></div>
  );
})

interface ILoadingProps {
  [propsName: string]: any
}