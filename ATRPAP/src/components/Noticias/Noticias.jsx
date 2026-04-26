import  { useState } from 'react';
import './Noticias.css';

import img1 from '../../assets/image 1.png';
import img3 from '../../assets/image 3.png';
import img7 from '../../assets/image 7.png';
import imgBanner from '../../assets/atividades_coopagri.png';

const noticias = [
  {
    categoria: 'Agricultura',
    data: '20 Abr 2026',
    titulo: 'ATRPAP amplia suporte aos agricultores familiares do Pará',
    resumo:
      'Novas iniciativas fortalecem a produção sustentável e garantem melhores condições para as famílias do assentamento.',
    imagem: img1,
  },
  {
    categoria: 'Pesca',
    data: '15 Abr 2026',
    titulo: 'Pescadores artesanais recebem capacitação técnica',
    resumo:
      'Programa de treinamento beneficia dezenas de pescadores com técnicas modernas e sustentáveis de manejo dos recursos hídricos.',
    imagem: img7,
  },
  {
    categoria: 'Cooperativismo',
    data: '10 Abr 2026',
    titulo: 'Assembleia geral define metas para o segundo semestre',
    resumo:
      'Membros da associação se reuniram para deliberar sobre os projetos prioritários e o planejamento estratégico da cooperativa.',
    imagem: img3,
  },
  {
    categoria: 'Sustentabilidade',
    data: '05 Abr 2026',
    titulo: 'Projeto de reflorestamento avança na região do Prata',
    resumo:
      'Mais de 2 mil mudas foram plantadas em parceria com órgãos ambientais, reforçando o compromisso com o meio ambiente.',
    imagem: imgBanner,
  },
  {
    categoria: 'Comercialização',
    data: '01 Abr 2026',
    titulo: 'Feira regional movimenta economia local com produtos da ATRPAP',
    resumo:
      'Produtores associados expuseram e venderam seus produtos diretamente ao consumidor, gerando renda e visibilidade à marca.',
    imagem: img1,
  },
];

const VISIBLE = 3;

export default function Noticias() {
  const [current, setCurrent] = useState(0);
  const total = noticias.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < VISIBLE; i++) {
      items.push(noticias[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="noticias" className="noticias-section">
      <div className="noticias-container">
        <div className="noticias-header">
          <h2>Notícias</h2>
          <p>Fique por dentro das últimas novidades e iniciativas da ATRPAP</p>
        </div>

        <div className="noticias-carousel-wrapper">
          <button className="noticias-btn" onClick={prev} aria-label="Anterior">
            &#10094;
          </button>

          <div className="noticias-track">
            {getVisible().map((noticia, index) => (
              <article className="noticia-card" key={index}>
                <div className="noticia-img-wrapper">
                  <img src={noticia.imagem} alt={noticia.titulo} />
                  <span className="noticia-categoria">{noticia.categoria}</span>
                </div>
                <div className="noticia-body">
                  <span className="noticia-data">{noticia.data}</span>
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.resumo}</p>

                </div>
              </article>
            ))}
          </div>

          <button className="noticias-btn" onClick={next} aria-label="Próximo">
            &#10095;
          </button>
        </div>

        <div className="noticias-dots">
          {noticias.map((_, i) => (
            <button
              key={i}
              className={`noticias-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para notícia ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
