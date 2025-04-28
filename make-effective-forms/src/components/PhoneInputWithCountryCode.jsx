import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PhoneInputWithCountryCode = ({ value, onChange, required = false, pattern, title }) => {

    const [number, setNumber] = useState("")
    const [countryCode, setCountryCode] = useState("")

    const handleNumberChange = (e) => {
        const update = e.target.value
        setNumber(update)
        onChange({ countryCode, number: update })
    }

    const handleCodeChange = (e) => {
        const update = e.target.value
        setCountryCode(update)
        onChange({ countryCode: value, update })
    }

    useEffect(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
          .then(res => res.json())
          .then(data => {
            const country = data.country
            return fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
          })
          .then(res => res.json())
          .then(data => {
            const code = data[0].idd.root + data[0].idd.suffixes[0]
            setCountryCode(code)
            onChange({ countryCode: code, number })
          })
          .catch(error => {
            console.error('Error during fetching Country and Code for Phone:', error)
          })
      }, [])

    
    return (
        <div className="mb-3">
            <label className="form-label" style={{marginBottom: '0rem'}}>Phone</label>
            <div className="input-group d-flex gap-2">
                <input className="form-control" style={{ flex: '1' }} value={countryCode} onChange={handleCodeChange} placeholder={countryCode}/>
                <input className="form-control" style={{ flex: '10' }} value={number} onChange={handleNumberChange} required={required} type="tel" placeholder="ex. 123456789" pattern={pattern} title={title}/>
            </div>
        </div>
    )
}

export default PhoneInputWithCountryCode
