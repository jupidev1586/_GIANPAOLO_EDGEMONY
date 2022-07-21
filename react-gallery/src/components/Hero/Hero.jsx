import './index.css';

// const ImageCard = (props) => {
const Hero = ({data}) => {
  return (
    <div className="Hero">
      <div className="col-4 d-flex-align-start">
        <h2>Welcome onboard</h2>
        <h4>This is my Hero</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tempora quidem harum amet aliquid esse architecto dolore modi ipsam nemo!</p>
      </div>
    </div>
  )
}

export default Hero;