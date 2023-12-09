import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import {Pricing} from './components/pricing';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Compareplans from './components/compareplan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
    <Navbar></Navbar>
    <Root></Root>
    <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <Pricing planName="Free" price="0" users="10" storage="2" support="Email support" helpCenter="Help center access" buttonText="Sign up for free"> </Pricing>
    <Pricing planName="Pro" price="15" users="20" storage="10" support="Priority email support" helpCenter="Help center access" buttonText="Get started"> </Pricing>
    <Pricing planName="Enterprise" price="29" users="30" storage="15" support="Phone and email support" helpCenter="Help center access" buttonText="Contact us" highlight> </Pricing> 
    </div>
    <Compareplans></Compareplans>
    </main>
    <Footer></Footer>
    </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
