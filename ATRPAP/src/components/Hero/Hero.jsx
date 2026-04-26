
import './Hero.css';
import bannerImg from '../../assets/BANNER.png';

export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>ATRPAP</h1>
        <h2>Cooperativa mista de Agricultores e Pescadores do Estado do Pará</h2>
        <p>Força coletiva para o agricultor e pescador paraense</p>
      </div>
    </section>
  );
}
