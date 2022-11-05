import './App.module.css';
import CurrynceInput from './CurrynceInput/CurrynceInput';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const [currency1, currencyState1] = useState('USD');
  const [currency2, currencyState2] = useState('USD');

  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/fixer/latest?base=USD&apikey=cbpH1YcXGt3oyUUWvv3XLQmexNHIxCsv'
      )
      .then(response => {
        setRates(response.data.rates);
      });
  });

  return (
    <div>
      <CurrynceInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrynceInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}


