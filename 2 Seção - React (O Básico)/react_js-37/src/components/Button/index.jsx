import P from 'prop-types';
import './styles.css';

// Component Button -------------------------------------
export const Button = ({ text, onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func,
  disabled: P.bool,
}
