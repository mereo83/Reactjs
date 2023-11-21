import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import Pricing from './components/pricing';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Compareplans from './components/compareplan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Root></Root>
    <Pricing> </Pricing> 
    <Compareplans></Compareplans>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
