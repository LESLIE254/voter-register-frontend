import React, { useState} from 'react';
import StationSelection from '../components/StationSelection';

const AddVoter = ({ stationData }) => {
    const [record, setRecord] = useState({
        first_name:"",
        middle_name:"",
        last_name:"",
        polling_station_id:"",
        gender:"",
        age:"",
        DOB:"",
        id_number:""
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setRecord({
            ...record,
            [e.target.name]:e.target.value
        })}

        const handleSubmit = (e) => {
            e.preventDefault()
            fetch("http://localhost:3000/voters", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(record)
              });

              setRecord({
                first_name:"",
                middle_name:"",
                last_name:"",
                polling_station_id:"",
                gender:"",
                age:"",
                DOB:"",
                id_number:""
                    })
               
        }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>first name</label><br />
                    <input type="text" placeholder="first name..." name="first_name" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>middle name</label><br />
                    <input type="text" placeholder="middle name..." name="middle_name" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>last name</label><br />
                    <input type="text" placeholder="last name..." name="last_name" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>ID Number</label><br />
                    <input type="text" placeholder="Enter ID..." name="id_number" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>D.O.B</label><br />
                    <input type="date" min="01/11/2004" name="DOB" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>Age</label><br />
                    <input type="text" name="age" onChange={handleChange}></input>                          
                </div>
                <div>
                    <label>Gender</label><br/>
                    <select name="gender" onChange={handleChange}>
                        <option>-select-</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>                       
                </div>
                <StationSelection stationData={stationData} handleChange={handleChange}/>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default AddVoter;