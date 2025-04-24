import React from "react";

const InvoiceFields = ({ checked, onToggle, data, onChange }) => {
    return (
        <div className="mb-3">
            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="wantsInvoice" checked={checked} onChange={(e) => onToggle(e.target.checked)} />
                <label className="form-check-label" htmlFor="wantsInvoice">
                    I want an invoice
                </label>
            </div>


    {checked && (
        <div className="mt-3 border p-3 rounded bg-light-subtle">
            <h5 className="mb-3">Data for invoice</h5>

            <div className="mb-3">
                <label className="form-label">Company name</label>
                <input type="text" className="form-control" value={data.name} onChange={(e) => onChange({ ...data, name: e.target.value })} />
            </div>

          <div className="mb-3">
            <label className="form-label">NIP</label>
            <input type="text" className="form-control" value={data.nip} onChange={(e) => onChange({ ...data, nip: e.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" rows="2" value={data.address} onChange={(e) => onChange({ ...data, address: e.target.value })} />
          </div>
        </div>
      )}
    </div>
    );
};

export default InvoiceFields;
