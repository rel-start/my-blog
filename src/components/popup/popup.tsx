import React, {
  memo, MouseEvent, useRef, useMemo, useCallback
} from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import styles from './popup.module.css';

import getUID from '@assets/scripts/get-uid';

export default memo(function Popup(props: IPopupProps) {
  const {
    hidden = false,
    className,
    children,
    dropdownBottom,
    dropdownLeft,
    dropdownWidth,
    overlay,
  } = props;
  const portalRef = useRef<any>();
  const containerRef = useRef<any>();
  const popupRef = useRef<any>();

  const stop = useCallback((e: MouseEvent) => e.stopPropagation(), []);
  const uid = useMemo(() => {
    return getUID('popup-')
  }, []);

  const classes = useMemo(() => {
    return classnames(className, styles.popup, {
      [styles.hidden]: hidden
    });
  }, [hidden, className]);

  return (
    <span
      onClick={stop}
      role="presentation"
      ref={portalRef}
    >
      {
        createPortal(
          <div
            data-portaltarget={uid}
            ref={containerRef}
          >
            <div
              data-test="ring-popup"
              className={classes}
              ref={popupRef}
              style={{
                top: dropdownBottom + 'px',
                left: dropdownLeft + 'px',
                minWidth: dropdownWidth + 'px',
              }}
            >
              {overlay ? overlay : children}
            </div>
          </div>,
          document.body)
      }
    </span>
  );
})

interface IPopupProps {
  [propsName: string]: any
}
