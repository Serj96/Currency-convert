import './App.module.css'
import CurrynceInput from './CurrynceInput/CurrynceInput';
import {useState, useEffect} from 'react'

export function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const [currency1, currencyState1] = useState('USD');
  const [currency2, currencyState2] = useState('USD');

  useEffect((() => {}));

  return (
    <div>
      <CurrynceInput
        currencies={['USD']}
        amount={amount1}
        currency={currency1}
      />
      <CurrynceInput
        currencies={['USD']}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}
