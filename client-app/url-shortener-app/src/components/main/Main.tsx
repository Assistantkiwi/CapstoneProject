import * as React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';


type IMainProps = object

const Main: React.FunctionComponent<IMainProps> = () => {
  return (
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  );
};

export default Main;
