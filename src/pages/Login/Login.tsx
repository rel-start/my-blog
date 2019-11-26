import React,{memo} from 'react';

export default memo(function Login(props: ILoginProps) {

  return (
    <div>Login</div>
  );
})

interface ILoginProps {
  [propsName: string]: any
}