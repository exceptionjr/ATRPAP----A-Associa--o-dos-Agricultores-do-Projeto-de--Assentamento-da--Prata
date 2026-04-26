import  { useState } from 'react';
import './OQueFazemos.css';

import img1 from '../../assets/image 1.png';
import img3 from '../../assets/image 3.png';
import img7 from '../../assets/image 7.png';

const servicos = [
  {
    titulo: 'Cuidados com o Solo',
    descricao: 'Preparo e correção do solo para maximizar a produtividade do plantio da agricultura familiar.',
    imagem: img1,
  },
  {
    titulo: 'Aragem e Gradagem',
    descricao: 'Gradagem, aração e subsolagem de áreas agrícolas para garantir melhor aproveitamento da terra.',
    imagem: img3,
  },
  {
    titulo: 'Suporte à Pesca',
    descricao: 'Apoio à pesca artesanal sustentável, fortalecendo a renda das famílias ribeirinhas do Pará.',
    imagem: img7,
  },
  {
    titulo: 'Comercialização Justa',
    descricao: 'Facilitamos a venda e distribuição dos produtos rurais, garantindo preços justos aos produtores.',
    imagem: img1,
  },
  {
    titulo: 'Capacitação Rural',
    descricao: 'Treinamentos e capacitações para fortalecer as habilidades dos agricultores familiares.',
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
