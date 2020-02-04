import React, { memo, useEffect } from 'react';

import Header from '@components/header/header';
import Button from '@components/button/button';
import { DropDownIcon } from '@components/icon/icons';
import Theme from '@assets/scripts/theme';
import DropDown from '@components/dropdown/dropdown';
import Popup from '@components/popup/popup';


export default memo(function NotFound(props: INotFoundProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>
      <Header />
      <div>
        <DropDown anchor={<Button theme={Theme.DROPDOWN} dropdown={<DropDownIcon />}>最新</Button>}>
          <Popup>aa1</Popup>
        </DropDown>
        <DropDown anchor={<Button theme={Theme.DROPDOWN} dropdown={<DropDownIcon />}>最新</Button>}>
          <Popup>bb2</Popup>
        </DropDown>
        <DropDown anchor={<Button theme={Theme.DROPDOWN} dropdown={<DropDownIcon />}>最新</Button>}>
          <Popup>cc3</Popup>
        </DropDown>
      </div>
    </>
  );
})

interface INotFoundProps {
  [propsName: string]: any
}