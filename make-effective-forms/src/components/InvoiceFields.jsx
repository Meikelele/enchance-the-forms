import React from "react";

const InvoiceFields = ({ checked, onToggle, data, onChange }) => {
    return (
        <div className="mb-3">
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="wantsInvoice" checked={checked} onChange={(e) => onToggle(e.target.checked)} />
                <label className="form-check-label" htmlFor="wantsInvoice">
                  VAT EU
                </label>
            </div>


    {checked && (
        <div className="mt-3 border p-3 rounded bg-light-subtle">
            <div className="mb-3">
                <label className="form-label">Country code and numbers specific for that country</label>
                <input type="text" className="form-control" value={data.vat_number} onChange={(e) => onChange({ ...data, vat_number: e.target.value })} />
            </div>

          <div className="mb-3">
            <label className="form-label">Data for invoice</label>
            <textarea className="form-control" rows="2" value={data.invoice_data} onChange={(e) => onChange({ ...data, invoice_data: e.target.value })} />
          </div>
        </div>
      )}
    </div>
    );
};

export default InvoiceFields;
