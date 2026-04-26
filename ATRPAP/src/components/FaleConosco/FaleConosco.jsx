
import './FaleConosco.css';
import whatsappIcon from '../../assets/logos_whatsapp-icon.png';

export default function FaleConosco() {
  return (
    <section id="fale-conosco" className="fale-section">
      <div className="fale-container">
        <h2 className="fale-titulo">Fale Conosco</h2>

        <div className="fale-card">
          <img src={whatsappIcon} alt="WhatsApp" className="fale-whatsapp-icon" />
          <p className="fale-texto">
            Faça parte da COOPAGRI e contribua para o fortalecimento da agricultura, da pesca e da aquicultura no Pará. Juntoa, vamos mais longe!
          </p>
          <a
            href="https://wa.me/5594992985555"
            target="_blank"
            rel="noopener noreferrer"
            className="fale-btn"
          >
            &#128172; Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
