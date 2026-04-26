
import './QuemSomos.css';
import quemSomosImg from '../../assets/atividades_coopagri.png';

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="quem-somos-section">
      <div className="quem-somos-container">
        <div className="quem-somos-content">
          <h2>Quem Somos?</h2>
          <div className="divider"></div>
          <p>
            A ATRPAP é uma cooperativa dedicada ao fortalecimento da agricultura familiar e da pesca artesanal no Estado do Pará.
            Nossa missão é unir forças para garantir melhores condições de trabalho, desenvolvimento sustentável e a comercialização
            justa dos produtos da nossa região.
          </p>
          <p>
            Com valores baseados na cooperação, transparência e respeito ao meio ambiente, construímos uma rede sólida de apoio
            que beneficia dezenas de famílias e movimenta a economia local.
          </p>
        </div>
        <div className="quem-somos-image">
          <img src={quemSomosImg} alt="Quem somos" />
        </div>
      </div>
    </section>
  );
}
