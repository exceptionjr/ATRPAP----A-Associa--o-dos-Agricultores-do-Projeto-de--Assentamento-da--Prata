
import './Hero.css';
import bannerImg from '../../assets/Background.png';

export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>ATRPAP</h1>
        <h2>A Associação dos Agricultores do Projeto de  Assentamento Prata,</h2>
        <p>Falta definir o slogan 

        </p>
      </div>
    </section>
  );
}
