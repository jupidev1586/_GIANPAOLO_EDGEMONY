import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const MainInput = ({ input, setInput }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    inputRef.current.classList.toggle('searchInput')
  }

  const onHandleInput = (e) => setInput(e.target.value)

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
      <input ref={inputRef} onChange={onHandleInput} type="text" maxLength="6"/>
      <button type="submit">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  )
}

export default MainInput;