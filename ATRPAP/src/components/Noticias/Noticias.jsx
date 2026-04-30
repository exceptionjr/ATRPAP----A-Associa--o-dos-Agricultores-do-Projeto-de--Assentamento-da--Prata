import { useState, useEffect } from 'react';
import './Noticias.css';

import assinaturaImg from '../../assets/noticias/assinatura.jpeg';
import contrucaoImg from '../../assets/noticias/contrucao.jpeg';

const noticias = [
  {
    categoria: 'Assinaturas',
    data: '29 Abr 2026',
    titulo: 'Assinaturas de contratos de linhas de crédito cedidas pelo Incra',
    resumo:
      'ATRPAP formaliza novas linhas de crédito para projetos de infraestrutura e produção no Assentamento Prata.',
    imagem: assinaturaImg,
  },
  {
    categoria: 'Construção',
    data: '28 Abr 2026',
    titulo: 'ATRPAP constrói casas do Incra no Projeto de Assentamento Prata',
    resumo:
      'Projeto habitacional avança com a construção de novas casas para famílias assentadas, contando com apoio técnico e recursos do Incra.',
    imagem: contrucaoImg,
  },
];

export default function Noticias() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const total = noticias.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => {
    if (total === 0) return;
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = () => {
    if (total === 0) return;
    setCurrent((c) => (c + 1) % total);
  };

  const getVisible = () => {
    const count = Math.min(visibleCount, total);
    const items = [];
    for (let i = 0; i < count; i++) {
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

        {noticias.length === 0 ? (
          <div className="noticias-empty">
            <p>Não há notícias disponíveis no momento.</p>
            <p>Volte em breve para acompanhar as novidades da ATRPAP.</p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}
