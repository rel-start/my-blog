import React, {
  memo, useState, useCallback, useRef, useEffect
} from 'react';
import styles from './banner.module.css';
import classnames from 'classnames';

/**
 * 图片数据
 */
const imgData = [
  'one.jpeg',
  'two.png',
  'three.png'
];
const lens = imgData.length;

const imgsMap = imgData.map(img => require('@assets/imgs/' + img));

/**
 * 图片数据以背景的形式展现
 */
const BannerItem = memo(function BannerItem(props: IBannerItemProps) {
  const {
    img,
    isVisible,
    isPromoted,
  } = props;

  return (
    <li
      className={styles['banner-item']}
      style={{
        backgroundImage: `url(${img})`,
        visibility: isVisible ? 'visible' : 'hidden',
        zIndex: isPromoted ? 1 : 0
      }}></li>
  );
})

interface IBannerItemProps {
  img: string,
  isVisible: boolean,
  isPromoted: boolean,
}

/**
 * 首页轮播图
 */
export default memo(function Banner(props: IBannerProps) {
  // 将每张图片切成15个小块，横向平铺
  const emWidth = 1180 / 10;

  // 是否被点击中。解决多次快速点击，动画未能及时过渡完的问题。用这 state 控制
  const [isClickIn, setIsClickIn] = useState(false);
  // 是向左划动吗
  const [isPrev, setIsPrev] = useState(false);
  // 当前滑块的索引
  const [currentImgNumber, setCurrentImgNumber] = useState(0);
  // 上一个滑块的索引，所有 <em> 动画结束后才会改变
  const [prevImgNumber, setPrevImgNumber] = useState(0);
  // 记录定时器
  const timer = useRef<any>();
  // 鼠标进入滑块的开关
  const [isStop, setIsStop] = useState(false);
  // 需提升层级的 <li>
  const [isPromoted, setIsPromoted] = useState(-1);

  // 上一张
  const prevClick = useCallback(() => {
    if (!isClickIn) {
      setIsPromoted(-1);
      setIsClickIn(true);
      setIsPrev(true);
      const n = currentImgNumber <= 0 ? lens - 1 : currentImgNumber - 1;
      setCurrentImgNumber(n);
    }
  }, [currentImgNumber, isClickIn]);

  // 下一张
  const nextClick = useCallback(() => {
    if (!isClickIn) {
      setIsPromoted(-1);
      setIsClickIn(true);
      setIsPrev(false);
      const n = currentImgNumber >= lens - 1 ? 0 : currentImgNumber + 1;
      setCurrentImgNumber(n);
    }
  }, [currentImgNumber, isClickIn]);

  // 轮播图自动切换
  useEffect(() => {
    clearInterval(timer.current);
    // 鼠标进入停止的开关
    if (isStop) return;
    timer.current = setInterval(() => {
      if (!isClickIn) {
        setIsPromoted(-1);
        setIsClickIn(true);
        setIsPrev(false);
        const n = currentImgNumber >= lens - 1 ? 0 : currentImgNumber + 1;
        setCurrentImgNumber(n);
      }
    }, 5000);

    return () => {
      clearInterval(timer.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickIn, isStop]);

  // onMouseLeave
  const onMouseLeave = useCallback(() => {
    setIsStop(false);
  }, []);

  // onMouseEnter
  const onMouseEnter = useCallback(() => {
    setIsStop(true);
  }, []);

  // onBullet
  const onBullet = useCallback((n) => {
    if (!isClickIn && currentImgNumber !== n) {
      setIsPromoted(-1);
      setIsClickIn(true);
      setIsPrev(currentImgNumber > n);
      setCurrentImgNumber(n);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClickIn]);

  // 最后一个动画的 <em> dom
  const lastEm = useRef<any>();
  // 用于防止添加 2个trainsitionend 事件
  const preventMultipleTimes = useRef(0);

  // 所有 <em> 动画结束后该做的动作
  const lastTrainsitionEnd = useCallback(() => {
    lastEm.current.removeEventListener('transitionend', lastTrainsitionEnd, false);
    setIsPromoted(currentImgNumber);
    setIsClickIn(false);
    setPrevImgNumber(currentImgNumber);
  }, [currentImgNumber]);

  // 所有 <em> 动画结束后添加 动作
  useEffect(() => {
    // 防止添加 2个trainsitionend 事件
    if (preventMultipleTimes.current === 2) {
      lastEm.current.addEventListener('transitionend', lastTrainsitionEnd, false);
    }
    preventMultipleTimes.current = 2;
  }, [lastTrainsitionEnd]);

  return (
    <div className={classnames(styles.banner)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ul className={styles['banner-list']}>
        {
          imgsMap.map((img: any, idx: number) => {
            return (
              <BannerItem
                img={img}
                key={idx}
                isVisible={idx === prevImgNumber}
                isPromoted={idx === isPromoted}
              />
            );
          })
        }

        {
          new Array(10).fill(null).map((item, i) => {
            const lastTrainsitionendIndex = isPrev ? 0 : 9;
            return (
              <em
                key={i}
                {...(lastTrainsitionendIndex === i ? { ref: lastEm } : '')}
                style={{
                  left: i * emWidth + 'px',
                  width: emWidth + 'px',
                  backgroundImage: `url(${imgsMap[currentImgNumber]})`,
                  backgroundPosition: `-${i * emWidth}px 0px`,
                  transitionDelay: isPrev ? `${(9 - i) * 0.04}s` : `${i * 0.04}s`,
                }}
                className={classnames({ [styles['animate']]: isClickIn })}
              ></em>
            );
          })
        }
      </ul>

      <span className={styles.prev} onClick={prevClick}>&#xe658;</span>
      <span className={styles.next} onClick={nextClick}>&#xe659;</span>

      <div className={styles['banner-pagination']} style={{ opacity: isStop ? 1 : 0 }}>
        {
          imgsMap.map((img, idx) => {
            return (
              <dfn
                onClick={() => onBullet(idx)}
                className={classnames(styles.bullet, {
                  [styles.on]: idx === currentImgNumber
                })}
                key={idx}
              ></dfn>
            );
          })
        }
      </div>
    </div>
  );
});

interface IBannerProps {
  [propsName: string]: any
}