import PropTypes from 'prop-types';



const CurrynceInput = (props) => {
  return (
    <div className="group">
      <input type="text" value={props.amount} />
      <select value={props.currency}></select>
      {props.currencies.map(currency => (
        <option value={currency}>{currency}</option>
      ))}
    </div>
  );
};

CurrynceInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
};

export default CurrynceInput;
