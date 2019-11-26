import React,{memo} from 'react';

export default memo(function NotFound(props: INotFoundProps) {

  return (
    <div>我是404</div>
  );
})

interface INotFoundProps {
  [propsName: string]: any
}