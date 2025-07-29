import { useState } from 'react';
import './App.css';

function App() {


  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(null);
  const[totalInterest, setTotalInterest]=useState(null);
  const[totalPayment,setTotalPayment]=useState(null);
  
  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const tenureYears = parseFloat(years);

    if (principal && annualRate && tenureYears) {
      const monthlyRate = annualRate / 12 / 100;
      const months = tenureYears * 12;
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
          const totalPayment = emi * months;
          const totalInterest=totalPayment-principal;

      setEmi(emi.toFixed(2));
      setTotalInterest(Number(totalInterest.toFixed(2)).toLocaleString('en-IN'));
      setTotalPayment(totalPayment.toFixed(2));
    } else {
      setEmi(null);
       setTotalInterest(null);
    }
  }

    


  return (
    <div className="bg-secondary min-vh-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5 p-4 text-center shadow-sm">
            <h5 className="text-success mb-4">EMI CALCULATOR</h5>

          <label htmlFor="amount" className="form-label">
        Enter Amount:<strong>{amount}</strong>
      </label>
      <input
        type="range"
        className="form-range"
        min="10000"
        max="3000000"
        step="5000"
        value={amount}
        id="customRange4"
        onChange={(e) => setAmount(e.target.value)}
      />
      
       <label htmlFor="interest" className="form-label">
        Interest Rate %:<strong>{interest}</strong>
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="25"
        step="0.1"
        
        
        value={interest}
        id="customRange4"
        onChange={(e) => setInterest(e.target.value)}
      />

      <label htmlFor="years" className="form-label">
        Years:<strong>{years}</strong>
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="30"
        step="1"
        value={years}
        id="customRange4"
        onChange={(e) => setYears(e.target.value)}
      />
    

            
           

            <button className="btn btn-primary w-100" onClick={calculateEMI}>
              Calculate EMI
            </button>

            {emi !== null && (
              <div className="mt-4 fs-6 text-dark">
                Your Monthly EMI is: <b>₹{emi}</b>
              </div>
            )}
            <div className="mt-2 fs-6 text-dark">
              Principal Amount is: <b>{amount}</b>
            </div>
            <div className="mt-2 fs-6 text-dark">
              Total Interest: <b>{totalInterest}</b>
              <div class="mt-2 fs-6 text-dark">
                Total Amount: <b>{totalPayment}</b>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

