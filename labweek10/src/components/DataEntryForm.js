import React, {useState} from "react";
import "./DataEntryForm.css"

export default function DataEntryForm(){
    
    const [userData, setUserData] = useState({

        email: '',
        name: '',
        address:'',
        address2:'',
        city:'',
        province:'',
        postalCode: '',
        checkbox1: false,

    })
    const [submittedData, setSubmittedData] = useState(null);
    const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontairo', 'Prince Edward Island', 'Quebec', 'Saskatchewan']
    
    const onValueChanged = (event) => {
        event.preventDefault();
        const value = 
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUserData({
            ...userData,
            [event.target.name]: value,
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        setSubmittedData({ ...userData });
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmitForm(e)}>
            <h1 className="header">Data Entry Form</h1> 
                <input
                className="half"
                name='email'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Enter Email"
                />
                <input
                className="half"
                name='name'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Full Name"
                />
                <input
                className="full"
                name='address'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="1234 Main St"
                />
                <input
                className="full"
                name='address2'
                type="text"
                onChange={(e) => onValueChanged(e)} 
                placeholder="Apartment, studio, or floor"
                />
                <input
                className="oneThird"
                name='city'
                type="text"
                placeholder="City"
                onChange={(e) => onValueChanged(e)} 
                />
                <select className="oneThird" name='province' onChange={(e) => onValueChanged(e)}>
                        
                            <option value="" disabled selected>
                            Choose...
                            </option>
                           {provinces.map((province) => (
                            <option key={province} value={province}>
                              {province}
                            </option>
                          ))}
                </select>
                <input
                className="oneThird"
                name='postalCode'
                type="text"
                placeholder="Postal Code"
                onChange={(e) => onValueChanged(e)} 
                />
                <br/>
                <input  type="checkbox" id="checkbox1" name="checkbox1" checked={userData.checkbox1} onChange={(e) => onValueChanged(e)}/>
                <label>Agree Terms & Conditions?</label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div className="submitted-data">
                    <h2>Submitted Data</h2>
                    <p>Email: {submittedData.email}</p>
                    <p>Name: {submittedData.name}</p>
                    <p>Address: {submittedData.address}</p>
                    <p>Address 2: {submittedData.address2}</p>
                    <p>City: {submittedData.city}</p>
                    <p>Province: {submittedData.province}</p>
                    <p>Postal Code: {submittedData.postalCode}</p>
                    <p>Agreed to Terms & Conditions: {submittedData.checkbox1 ? 'Yes' : 'No'}</p>
                </div>
            )}
            
        </div>

    )

}