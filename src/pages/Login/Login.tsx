import React, { memo, useState } from 'react';

import styles from './Login.module.css';
import classnames from 'classnames';

import Input from '@components/input/input';
import Button from '@components/button/button';
import Theme from '@assets/scripts/theme';

/**
 * @name 忘记密码
 */
const LoginForget = memo(function LoginForget(props: ILoginForgetProps) {

  const onClick = () => {
    alert("开发中。。。")
  }

  return (
    <div className={styles.forget}>
      <span className={styles.links} onClick={onClick}>账号注册</span>
      <span className={styles.links} onClick={onClick}>忘记密码</span>
    </div>
  );
})

interface ILoginForgetProps {
  [propsName: string]: any
}

/**
 * @name 头部logo
 */
const LoginHead = memo(function LoginHead(props: ILoginHeadProps) {
  return (
    <div className={styles["head"]}>
      <i className={styles["logo"]}>&#xf16f;</i>
      断点
    </div>
  );
})

interface ILoginHeadProps {
  [propsName: string]: any
}

/**
 * @name 2种登录方式
 */
const LoginWays = memo(function LoginWays(props: ILoginWaysProps) {

  const [way, setWay] = useState("pwd");

  const changeWay = (way: string) => {
    setWay(way);
  }

  return (
    <div className={styles["ways"]}>
      <span
        className={classnames(styles["way-item"], {
          [styles.on]: way === "pwd"
        })}
        onClick={() => changeWay("pwd")}
      >密码登录</span>
      <span
        className={classnames(styles["way-item"], {
          [styles.on]: way === "phone"
        })}
        onClick={() => changeWay("phone")}
      >免密登录</span>
    </div>
  );
})

interface ILoginWaysProps {
  [propsName: string]: any
}

/**
 * @name From1 密码登录表单
 */
const From1 = memo(function From1(props: IFrom1Props) {
  const onSubmit = () => {
    alert("提交表单，验证数据");
  }
  return (
    <div className={styles["login-form"]}>
      <Input
        placeholder="用户名"
        label="用户名"
        className={styles["input-wrapper"]}
        error="账号或密码错误，请重新输入"
      />

      <Input
        placeholder="请输入密码"
        label="请输入密码"
        type="password"
        className={styles["input-wrapper"]}
      />

      <LoginForget />
        <Button
          theme={Theme.SUBMIT}
          isusedefaultstyle={0}
          onClick={onSubmit}
        >登录</Button>
    </div>
  );
})

interface IFrom1Props {
  [propsName: string]: any
}

/**
 * @name Login组件
 */
export default memo(function Login(props: ILoginProps) {

  return (
    <div className={styles["component-login"]}>
      <div className={styles["login"]}>
        <LoginHead />
        <LoginWays />
        <From1 />
      </div>
    </div>
  );
})

interface ILoginProps {
  [propsName: string]: any
}