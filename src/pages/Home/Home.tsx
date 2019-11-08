import './Home.css';
import React from 'react';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';

export default function Home(props: IHomeProps) {
  const {

  } = props;

  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

interface IHomeProps {
  [propsName: string]: any
}