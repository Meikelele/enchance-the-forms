import React from "react";

const paymentOptions = [
  { label: "BLIK", value: "blik", icon: "bi-phone" },
  { label: "Karta", value: "card", icon: "bi-credit-card" },
  { label: "Pośrednik", value: "gateway", icon: "bi-currency-exchange" },
];

const PaymentMethodRadioGroup = ({ value, blikCode, onChange, onBlikCodeChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Payment</label>
      
      <div className="d-flex flex-wrap gap-3">
        {paymentOptions.map((option) => (
          <label key={option.value} className={`btn btn-outline-success d-flex align-items-center gap-2 ${ value === option.value ? "active" : ""}`}>
            <input type="radio" name="payment" value={option.value} checked={value === option.value} onChange={(e) => onChange(e.target.value)} className="d-none"/>
            <i className={`bi ${option.icon}`}></i>
            {option.label}
          </label>
        ))}
      </div>

      {value === "blik" && (
        <div className="mt-3">
          <label htmlFor="blikCode" className="form-label" style={{ marginBottom: '0.25rem' }}>
            Code BLIK
          </label>
          <input type="text" id="blikCode" maxLength="6" className="form-control" placeholder="Wpisz 6-cyfrowy kod" value={blikCode} onChange={(e) => onBlikCodeChange(e.target.value)} />
        </div>
      )}
    </div>
  );
};

export default PaymentMethodRadioGroup;
