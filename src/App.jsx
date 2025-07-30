import { useState } from 'react';
import './App.css';

function App() {


  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(null);
  const[totalInterest, setTotalInterest]=useState(null);
  const[totalPayment,setTotalPayment]=useState(null);
  const[schedule ,setSchedule]=useState([]);
  
  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const tenureYears = parseInt(years);

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

    let balance=principal;
        const scheduleArr=[];
        for(let i=1;i<=months;i++){
          const interestPayment=balance*monthlyRate;
          const principalPayment=emi-interestPayment;
          balance=balance-principalPayment;
        
        scheduleArr.push({
         emi:emi.toFixed(2),
          month:i,
          principal:principalPayment.toFixed(2),
          interest:interestPayment.toFixed(2),
          balance:balance>0?balance.toFixed(2):"0.00"
        });

      }
      setSchedule(scheduleArr);
    } else {
      setEmi(null);
       setTotalInterest(null);
    }
  }

    


  return (
    <div className="bg-secondary min-vh-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-10">
          <div className="card mt-5 p-4 text-center shadow-sm">
            <h5 className="text-success mb-4 fs-2">EMI CALCULATOR</h5>
          
          <label htmlFor="amount" className="form-label">
            <div class="d-flex justify-content-between">
              <span><b>₹10000</b></span>
              <span>Enter Amount:<strong>{amount}</strong></span>
              <span><b>₹3000000</b></span>
              
            </div>
       
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
        <div class="d-flex justify-content-between">
              <span><b>0%</b></span>
              <span> Interest Rate %:<strong>{interest}</strong></span>
              <span><b>25%</b></span>
              
            </div>
       
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
         <div class="d-flex justify-content-between">
              <span><b>0</b></span>
              <span>   Years:<strong>{years}</strong></span>
              <span><b>30</b></span>
              
            </div>
      
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
                 {schedule.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center mt-3">
            <thead className="table-primary">
              <tr>
                <th>Month</th>
                <th>EMI (₹)</th>
                <th>Principal (₹)</th>
                <th>Interest (₹)</th>
                <th>Remaining Balance (₹)</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{row.emi}</td>
                  <td>{row.principal}</td>
                  <td>{row.interest}</td>
                  <td>{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

