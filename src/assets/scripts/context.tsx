import { createContext } from 'react';

// dropdown组件 弹出层的显示状态
export const PopupContext = createContext(false);

// menu组件
export const MenuContext = createContext<any>(null);