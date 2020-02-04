import './Home.module.css';
import React, { useEffect } from 'react';
import Header from '@components/header/header';
import Banner from '@components/banner/banner';
import Notes from '@components/notes/notes';
import Practise from '@components/practise/practise';
import Likes from '@components/likes/likes';
import Footer from '@components/footer/footer';
import Totops from '@components/totop-group/totop-group';

export default function Home(props: IHomeProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Banner />
      <Notes />
      <Practise />
      <Likes />
      <Footer />
      <Totops />
    </>
  );
}

interface IHomeProps {
  [propsName: string]: any
}