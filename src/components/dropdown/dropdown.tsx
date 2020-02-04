import React, {
  memo, cloneElement, useState, useRef, useMemo, useCallback,
} from 'react';
import styles from './dropdown.module.css';
import classnames from 'classnames';
import useWinScroll from '../../assets/scripts/useWinScroll';

/**
 * @name Dropdown
 */
export default memo(function Dropdown(props: IDropdownProps) {
  const {
    anchor,

    initShown = false,
    clickMode = false,
    className,
    children,
    hoverMode = true,
    hoverShowTimeOut = 100,
    hoverHideTimeOut = 100,
    restProps
  } = props;

  const [show, setShow] = useState(initShown);
  const dropdownRef = useRef<any>();
  const hoverTimer = useRef<any>();
  const { top, left } = useWinScroll(0);

  const onClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const onMouseEnter = useCallback(() => {
    _clearTimer();
    hoverTimer.current = setTimeout(() => {
      setShow(true);
    }, hoverShowTimeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseLeave = useCallback(() => {
    _clearTimer();
    hoverTimer.current = setTimeout(() => {
      setShow(false);
    }, hoverHideTimeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _clearTimer = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverTimer.current]);

  const {
    dropdownBottom,
    dropdownLeft,
    dropdownWidth
  }: any = useMemo(() => {
    if (dropdownRef.current) {
      const dropdownStyles = dropdownRef.current.getBoundingClientRect();
      return {
        dropdownStyles,
        dropdownLeft: dropdownStyles.left + left,
        dropdownBottom: dropdownStyles.bottom + top,
        dropdownWidth: dropdownStyles.width,
      }
    }
    return {
      dropdownBottom: undefined,
      dropdownLeft: undefined,
      dropdownWidth: undefined,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top, left, dropdownRef.current]);


  const classes = classnames(styles.dropdown, className);

  return (
    <div
      data-test="ring-dropdown"
      {...restProps}
      className={classes}
      onClick={clickMode ? onClick : undefined}
      onMouseEnter={hoverMode ? onMouseEnter : undefined}
      onMouseLeave={hoverMode ? onMouseLeave : undefined}
      ref={dropdownRef}
    >
      {anchor}
      {cloneElement(children, {
        hidden: !show,
        setShow,
        dropdownBottom,
        dropdownLeft,
        dropdownWidth,
      })}
    </div>
  );
});

interface IDropdownProps {
  [propsName: string]: any
}