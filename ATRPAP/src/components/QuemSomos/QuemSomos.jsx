
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
            A Associação dos Agricultores do Projeto de  Assentamento Prata, 
            formada por 125 famílias Assentadas pelo Incra, no Município de 
            Sao Joao do Araguaia, tem como objetivo, a melhoria da condição
             de vida dos agricultores familiares. Perseguindo sempre a diversificação 
             de renda, respeitando o meio ambiente, num sistema de cultivo sustentável.
          </p>
          <p>
            Com valores baseados na cooperação, transparência e respeito ao meio ambiente, 
            construímos uma rede sólida de apoio
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
