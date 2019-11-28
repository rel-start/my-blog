import React, { memo } from 'react';

import Header from '@components/header/header';

export default memo(function NotFound(props: INotFoundProps) {

  return (
    <>
      <Header />
      <div>我是404</div>
    </>
  );
})

interface INotFoundProps {
  [propsName: string]: any
}