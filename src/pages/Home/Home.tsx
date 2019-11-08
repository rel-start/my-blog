import './Home.css';
import React from 'react';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Notes from '@components/Notes/Notes';

export default function Home(props: IHomeProps) {
  const {

  } = props;

  return (
    <>
      <Header />
      <Banner />
      <Notes />
    </>
  );
}

interface IHomeProps {
  [propsName: string]: any
}