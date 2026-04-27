
import './Gallery.css';
import img1 from '../../assets/fotos/plantandomacaxeira.jpeg';
import img2 from '../../assets/fotos/tirandoleite.jpeg';
import img3 from '../../assets/frame1.png';


export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-layout">
        <img src={img1} alt="Agricultura" className="gallery-img" />
        <img src={img2} alt="Pesca com rede" className="gallery-img" />
        <img src={img3} alt="Atividades Coopagri" className="gallery-img" />
      </div>
    </section>
  );
}
