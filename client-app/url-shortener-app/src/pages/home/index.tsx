import * as React from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';


type IHomeProps = object

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  );
};

export default Home;
