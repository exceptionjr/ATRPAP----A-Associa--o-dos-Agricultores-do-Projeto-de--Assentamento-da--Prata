import { useState } from 'react';
import './OQueFazemos.css';

import img1 from '../../assets/image 1.png';
import img3 from '../../assets/image 3.png';
import img7 from '../../assets/image 7.png';

const servicos = [
  {
    titulo: 'Regularização Fundiária',
    descricao: 'Titulação de propriedades para garantir segurança jurídica e acesso a créditos aos assentados.',
    imagem: img1,
  },
  {
    titulo: 'Fortalecimento da Agricultura Familiar',
    descricao: 'Projetos de Créditos Produtivos e Ambientais através de cooperação técnica com o INCRA.',
    imagem: img3,
  },
  {
    titulo: 'Crédito para Habitação Rural',
    descricao: 'Acordos voltados para a construção e reforma de casas nos lotes dos nossos associados.',
    imagem: img7,
  },
  {
    titulo: 'Captação de Recursos e Equipamentos',
    descricao: 'Gestão de emendas e parcerias para aquisição de máquinas que modernizam o trabalho no campo.',
    imagem: img1,
  },
  {
    titulo: 'Assistência Técnica Especializada',
    descricao: 'Suporte profissional direto com supervisão de Engenheiro Agrônomo e Médica Veterinária.',
    imagem: img3,
  },
];

const VISIBLE = 3;

export default function OQueFazemos() {
  const [current, setCurrent] = useState(0);
  const total = servicos.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < VISIBLE; i++) {
      items.push(servicos[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="o-que-fazemos" className="oqf-section">
      <div className="oqf-container">
        <div className="oqf-header">
          <h2>O que fazemos?</h2>
          <p>Nossas frentes de atuação em prol da agricultura familiar e do produtor rural no Pará</p>
        </div>

        <div className="oqf-carousel-wrapper">
          <button className="oqf-carousel-btn" onClick={prev} aria-label="Anterior">
            &#10094;
          </button>

          <div className="oqf-carousel-track">
            {getVisible().map((servico, index) => (
              <div className="oqf-card" key={index}>
                <div className="oqf-image-circle">
                  <img src={servico.imagem} alt={servico.titulo} />
                </div>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </div>
            ))}
          </div>

          <button className="oqf-carousel-btn" onClick={next} aria-label="Próximo">
            &#10095;
          </button>
        </div>

        <div className="oqf-dots">
          {servicos.map((_, i) => (
            <button
              key={i}
              className={`oqf-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para item ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
