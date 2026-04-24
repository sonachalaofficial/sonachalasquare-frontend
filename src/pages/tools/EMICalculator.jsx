import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js/auto";

export default function EmiCalculator() {
  const [loan, setLoan] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(2);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  function calculateEMI(P, annualRate, Y) {
    const R = annualRate / 12 / 100;
    const N = Y * 12;

    const EMI = (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    const totalPayment = EMI * N;
    const totalInterest = totalPayment - P;

    return {
      emi: EMI || 0,
      totalInterest: totalInterest || 0,
      totalPayment: totalPayment || 0,
    };
  }

  function formatINR(num) {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(num);
  }

  useEffect(() => {
    const result = calculateEMI(loan, rate, years);
    setEmi(result.emi);
    setTotalInterest(result.totalInterest);
    setTotalPayment(result.totalPayment);
  }, [loan, rate, years]);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current;

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            data: [loan, totalInterest],
          },
        ],
      },
    });
  }, [loan, totalInterest]);

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
      <div className="container">
        <h3 style={{ marginBottom: "20px" }}>Home Loan EMI Calculator</h3>

        <div className="row">
          {/* Left Side Inputs */}
          <div className="col-md-6" style={{ background: "white", padding: "20px", borderRadius: "10px" }}>

            <label>Loan Amount (₹)</label>
            <input
              type="range"
              className="form-range"
              min="10000"
              max="10000000"
              step="10000"
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
            />
            <div>₹ {formatINR(loan)}</div>

            <br />

            <label>Interest Rate (%)</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
            <div>{rate} %</div>

            <br />

            <label>Tenure (Years)</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
            <div>{years} Years</div>
          </div>

          {/* Right Side Result */}
          <div className="col-md-6" style={{ padding: "20px" }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>

              <h5>Monthly EMI</h5>
              <h2 style={{ color: "green" }}>₹ {formatINR(emi)}</h2>

              <canvas ref={chartRef} style={{ maxHeight: "250px", marginTop: "20px" }} />

              <hr />

              <p>
                <strong>Principal Amount:</strong> ₹ {formatINR(loan)}
              </p>

              <p>
                <strong>Total Interest:</strong> ₹ {formatINR(totalInterest)}
              </p>

              <p>
                <strong>Total Payment:</strong> ₹ {formatINR(totalPayment)}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}