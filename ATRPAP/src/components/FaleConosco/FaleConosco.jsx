
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
            Estamos à disposição para apresentar os benefícios de se tornar um cooperado ATRPAP. 
            Contribua para a evolução do setor produtivo no Pará e alcance novos patamares. 
            Entre em contato conosco pelo Whatsapp e agende uma conversa.
            </p>
          <a
            href="https://wa.me/5594981376737"
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
