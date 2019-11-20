import './Home.css';
import React from 'react';
import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Notes from '@components/Notes/Notes';
import Practise from '@components/Practise/Practise';
import Likes from '@components/Likes/Likes';
import Footer from '@components/Footer/Footer';

export default function Home(props: IHomeProps) {

  return (
    <>
      <Header />
      <Banner />
      <Notes />
      <Practise />
      <Likes />
      <Footer />
    </>
  );
}

interface IHomeProps {
  [propsName: string]: any
}