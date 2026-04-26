
import './Contatos.css';
import iconLocation from '../../assets/Group.svg';
import iconPhone from '../../assets/ic_outline-call.svg';
import iconEmail from '../../assets/material-symbols_mail-outline.svg';

export default function Contatos() {
  return (
    <footer id="contatos" className="ct-footer">

      {/* ── Corpo principal ── */}
      <div className="ct-body">

        {/* Esquerda — informações */}
        <div className="ct-info">
          <h3 className="ct-titulo">Nossos Contatos</h3>

          <div className="ct-item">
            <img src={iconLocation} alt="Endereço" className="ct-icon-img" />
            <div className="ct-item-text">
              <strong>Endereço</strong>
              <span>Av. Boa Sorte - Setor Paraíso</span>
              <span>Pau D'arco - PA</span>
            </div>
          </div>

          <div className="ct-item">
            <img src={iconPhone} alt="Telefone" className="ct-icon-img" />
            <div className="ct-item-text">
              <strong>Contato</strong>
              <span>(94) 99298-5555</span>
            </div>
          </div>

          <div className="ct-item">
            <img src={iconEmail} alt="E-mail" className="ct-icon-img" />
            <div className="ct-item-text">
              <strong>E-mail</strong>
              <span>coopragipara@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divisor vertical */}
        <div className="ct-divider" />

        {/* Direita — marca */}
        <div className="ct-marca">
          <span className="ct-marca-nome">COOPERAGRI</span>
          <span className="ct-marca-sub">A coperativa do Pará</span>
        </div>

      </div>

      {/* ── Barra de copyright ── */}
      <div className="ct-bar">
        <span className="ct-bar-left">COPAGRI</span>
        <div className="ct-bar-center">
          <span>@ 2026 COPAGRI - Todos os direitos reservados.</span>
          <br />
          <span>CNPJ: 19.323.899/0001-01</span>
        </div>
        <div className="ct-bar-right">
          <span>Desenvolvido por</span>
          <br />
          <strong>Exception Jr</strong>
        </div>
      </div>

    </footer>
  );
}
