
import './Gallery.css';
import img1 from '../../assets/atividades_coopagri.png';
import img3 from '../../assets/frame1.png';
import img7 from '../../assets/frame2.png';

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-layout">
        <img src={img1} alt="Agricultura" className="gallery-img" />
        <img src={img7} alt="Pesca com rede" className="gallery-img" />
        <img src={img3} alt="Atividades Coopagri" className="gallery-img" />
      </div>
    </section>
  );
}
