import React from "react";
import Blog from "../Blog/Blog";
import Consul from "../Consul/Consul";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import LegalAssistance from "../LegalAssistance/LegalAssistance";
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Article from "../Article/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Consul />
              <LegalAssistance />
              <ReviewsContainer />
              <Blog />
            </>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
