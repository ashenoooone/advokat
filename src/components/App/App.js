import React from 'react';
import Blog from '../Blog/Blog';
import Consul from '../Consul/Consul';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LegalAssistance from '../LegalAssistance/LegalAssistance';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Consul />
      <LegalAssistance />
      <ReviewsContainer />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
