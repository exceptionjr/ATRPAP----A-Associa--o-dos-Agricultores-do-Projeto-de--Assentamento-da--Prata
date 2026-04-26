import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import QuemSomos from './components/QuemSomos/QuemSomos';
import OQueFazemos from './components/OQueFazemos/OQueFazemos';
import Noticias from './components/Noticias/Noticias';
import FaleConosco from './components/FaleConosco/FaleConosco';
import Contatos from './components/Contatos/Contatos';
import BackToTop from './components/BackToTop/BackToTop';
import './index.css';

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <QuemSomos />
        <OQueFazemos />
        <Noticias />
        <FaleConosco />
      </main>
      <Contatos />
      <BackToTop />
    </div>
  );
}

export default App;
