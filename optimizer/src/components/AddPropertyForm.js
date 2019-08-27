import React, {useState} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default function AddPropertyForm() {

    // to hold the state
    const [propertyValues, setPropertyValues] = useState ({address: '', city: '', state: '', zipcode: '', bedrooms: '', beds: '', kitchen: ''});

    // to update the state as values change
    const handleChange = event => {
        console.log('handling change: ', event.target.name, event.target.value);
        setPropertyValues({...propertyValues, [event.target.name]: event.target.value});
    }

    const addproperty = event => {
        console.log('adding property');
        // will make a post request, need to double check the names etc
    }

    return (
        <form className='add-property-form'>
            <h3> Add a Property </h3>

            Street Address
            <input type='address' name='address' value={propertyValues.address} onChange={handleChange} />

            City
            <input type='text' name='city' value={propertyValues.city} onChange={handleChange} />

            State
            <input type='text' name='state' value={propertyValues.state} onChange={handleChange} />

            Zip Code
            <input type='number' name='zipcode' value={propertyValues.zipcode} onChange={handleChange} />

            # of Beds
            <input type='number' name='beds' value={propertyValues.beds} onChange={handleChange} />

            # of Bedrooms
            <input type='number' name='bedrooms' value={propertyValues.bedrooms} onChange={handleChange} />

            Kitchen
            <input type='boolean' name='kitchen' value={propertyValues.kitchen} onChange={handleChange} />

            <button> <h3> Add </h3> </button>



        </form>
    )
}
