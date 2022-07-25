import links from '../../utility/links'
import './index.css';

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="Footer__list">
        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
        <li>
          <a href="/">Maps</a>
        </li> */}
        {
          links.map(link => (
            <li key={ link.id }>
              <a href={ link.url }>{ link.name }</a>
            </li>
          ))
        }
      </ul>
      <span>&copy; Copyright Gianpaolo Buono</span>
    </div>
  )
}

export default Footer;