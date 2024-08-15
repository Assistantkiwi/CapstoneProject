import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

type IAppProps = object

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
       <Header/>
       <Container/>
       <Footer/>
    </>
  );
};

export default App;

