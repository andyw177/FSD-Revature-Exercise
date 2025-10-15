import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <div className="jumbotron container">
      <div className="row">
        <div className="col-md-4">
          <Profile />
        </div>
        <div className="col-md-8">
          <About />
          <br />
          <Skills />
        </div>
      </div>
    </div>
    <Footer />

  </React.StrictMode>
);
