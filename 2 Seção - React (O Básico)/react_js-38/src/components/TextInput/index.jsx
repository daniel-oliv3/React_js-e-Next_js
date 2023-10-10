import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handlerChange }) => {
  return (
    <>
      <input
        className="text-input"
        onChange={handlerChange}
        type="search"
        value={searchValue}
        placeholder="Pesquisar..."
      />
    </>
  );
};


TextInput.propTypes = {
  searchValue: P.string,
  handlerChange: P.func,
};
