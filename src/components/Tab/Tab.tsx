import './Tab.css';
import React, {
  memo,
} from 'react';

export default memo(function Tab(props: ITabProps) {
  const {

  } = props;

  return (
    <div className="tab">
      <span className="on">常用笔记</span>
      <span>最新笔记</span>
      <span>所有笔记</span>
    </div>
  );
})

interface ITabProps {
  [propsName: string]: any
}