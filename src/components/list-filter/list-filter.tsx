import React, {
  memo, useMemo, MouseEvent,
} from 'react';
import styles from './list-filter.module.css';

import Theme from '@assets/scripts/theme';
import Button from '@components/button/button';
import { DropDownIcon } from '@components/icon/icons';
import DropDown from '@components/dropdown/dropdown';
import Popup from '@components/popup/popup';
import Menu from '@components/menu/menu';
import MenuItem from '@components/menu-item/menu-item';

const menuItemClick = (e: MouseEvent, cb: Function) => {
  const target: any = e.target;
  const dataIndex = target.dataset.index;
  if (typeof dataIndex === 'string') {
    // 联动dropdown的 Button 文字
    cb(target.innerHTML);
    // 如果点击的是MenuItem就请求数据
    alert(target.innerHTML+'。请求数据')
  }
}

export default memo(function ListFilter(props: IListFilterProps) {
  const {
    listFilterMenu1,
    listFilterMenu2,
    listFilterMenu3,
    setListFilterMenu1,
    setListFilterMenu2,
    setListFilterMenu3,
  } = props;

  const menu1 = useMemo(() => {
    return (
      <Menu onClick={(e: MouseEvent) => menuItemClick(e, setListFilterMenu1)} clickedIndex={0}>
        <MenuItem>最新</MenuItem>
        <MenuItem>最热</MenuItem>
        <MenuItem>点赞</MenuItem>
      </Menu>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu2 = useMemo(() => {
    return (
      <Menu onClick={(e: MouseEvent) => menuItemClick(e, setListFilterMenu2)} clickedIndex={0}>
        <MenuItem>全部分类</MenuItem>
        <MenuItem>Java笔记</MenuItem>
        <MenuItem>JS笔记</MenuItem>
      </Menu>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu3 = useMemo(() => {

    return (
      <Menu onClick={(e: MouseEvent) => menuItemClick(e, setListFilterMenu3)} clickedIndex={3}>
        <MenuItem>今年</MenuItem>
        <MenuItem>最近一月</MenuItem>
        <MenuItem>最近一周</MenuItem>
        <MenuItem>全部时间</MenuItem>
      </Menu>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["list-filter"]}>
      <DropDown
        className={styles["item"]}
        anchor={<Button theme={Theme.DROPDOWN}
          dropdown={<DropDownIcon />}
        >{listFilterMenu1}</Button>}>
        <Popup overlay={menu1}></Popup>
      </DropDown>
      <DropDown
        className={styles["item"]}
        anchor={<Button theme={Theme.DROPDOWN}
          dropdown={<DropDownIcon />}
        >{listFilterMenu2}</Button>}>
        <Popup overlay={menu2}></Popup>
      </DropDown>
      <DropDown
        className={styles["item"]}
        anchor={<Button theme={Theme.DROPDOWN}
          dropdown={<DropDownIcon />}
        >{listFilterMenu3}</Button>}>
        <Popup overlay={menu3}></Popup>
      </DropDown>
    </div>
  );
});

interface IListFilterProps {
  [propsName: string]: any
}