import './index.css';
import images from '../../assets/images';


const Gallery = (props) => {
 
  return (
    <div className="Gallery">
      {
        images.map((img) => <img key={img.id} src={img.url} alt={img.name} /> )
      }
    </div>
  )

}

export default Gallery;