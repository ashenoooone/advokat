import React from 'react';
import Blog from '../Blog/Blog';
import Consul from '../Consul/Consul';
import Header from '../Header/Header';
import LegalAssistance from '../LegalAssistance/LegalAssistance';
import ReviewsContainer from '../ReviewsContainer/ReviewsContainer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Consul />
      <LegalAssistance />
      <Blog />
      <ReviewsContainer />
    </div>
  );
}

export default App;
