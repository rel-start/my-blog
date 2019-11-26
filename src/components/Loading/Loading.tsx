import React,{memo} from 'react';

export default memo(function Loading(props: ILoadingProps) {

  return (
    <div>Loading</div>
  );
})

interface ILoadingProps {
  [propsName: string]: any
}