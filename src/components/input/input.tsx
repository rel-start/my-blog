import React, {
  memo,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import styles from './input.module.css';
import classnames from 'classnames';
import Theme from '@assets/scripts/theme';

function noop() { }

/**
 * @name Input
 */

export default memo(function Input(props: IInputProps) {
  const {
    theme = Theme.LIGHT,
    onChange = noop,

    className,
    inputClassName,
    value,
    borderless,
    label,
    error,
    ...restProps
  } = props;

  const inputRef = useRef<any>();

  const [empty, setEmpty] = useState(true);

  // ring-input的 ClassName
  const classes = classnames(
    styles.container,
    className,
    styles[theme],
    {
      [styles.error]: error,
      [styles.empty]: empty,
    }
  );

  // input的 ClassName
  const inputClasses = classnames(styles.input, inputClassName);
  // input的 内容
  const [text, setText] = useState(value ? value : "");

  // input的 Change事件
  const handleChange = useCallback((e: any) => {
    onChange(e);
    const inputVal = e.target.value;
    setText(inputVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 清空input文本
  const ClearVal = useCallback(() => {
    setText("");
  }, []);

  useEffect(() => {
    setEmpty(!inputRef.current.value.length);
  }, [text]);

  return (
    <div
      className={classes}
      data-test="ring-input"
    >
      <input
        className={inputClasses}
        ref={inputRef}
        onChange={handleChange}
        value={text}
        {...restProps}
      />
      <div className={styles.clear} onClick={ClearVal}>&times;</div>

      <label className={styles.label}>{label}</label>
      <div className={styles.underline} />
      <div className={styles.focusUnderline} />
      <div className={styles.errorUnderline} />

      <div
        className={styles.errorText}
      >{error}</div>
    </div>
  );
})

interface IInputProps {
  [propsName: string]: any
}