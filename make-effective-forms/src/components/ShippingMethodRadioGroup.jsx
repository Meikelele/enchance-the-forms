import React from "react";

const shippingOptions = [
  { label: "DPD", value: "DPD", icon: "bi-truck" },
  { label: "InPost", value: "InPost", icon: "bi-truck" },
  { label: "DHL", value: "DHL", icon: "bi-truck" },
  { label: "Fedex", value: "Fedex", icon: "bi-truck" },
  { label: "UPS", value: "UPS", icon: "bi-truck" },
];

const ShippingMethodRadioGroup = ({ value, onChange }) => {
    return (
      <div className="mb-3">
        <label className="form-label">Type of delivery</label>
        <div className="d-flex flex-wrap gap-3">
          {shippingOptions.map((option) => (
            <label key={option.value} className={`btn btn-outline-primary d-flex align-items-center gap-2 ${ value === option.value ? "active" : ""}`} >
              <input type="radio" name="shipping" value={option.value} checked={value === option.value} onChange={(e) => onChange(e.target.value)} className="d-none" required={!value} />
              <i className={`bi ${option.icon}`}></i>
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShippingMethodRadioGroup;