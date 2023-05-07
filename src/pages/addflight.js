import Header from "@/components/Header"
import { Button, TextField} from "@mui/material"
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react"
import { images } from "../../next.config"




const AddFlight = () => {




/*    const [data, setData] = useState({})

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(data)

        fetch('http://localhost:8082/api/user/addflight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => console.log(data))
    }*/

    return <div id='addflight'>
             <Header/>
        <div>
            <h1 className="headerFlights">Add new flight</h1>
        </div>
        
        <div className="container">
            <div className="form addflight-form">
                <div className="row">
                    <label className="labels">Departure Airport: </label>
                    <select className="select3"
                        id="departureA"
                        label="Please choose an option."
                        variant="outlined"
                        fullwidth="true"
                    >
                        <option value="BEL">Nikola Tesla, BEL</option>
                    </select>

    
                    <label className="labels" >Departure Date and Time:</label>

                    <TextField className="dateandtime1"
                        id="departure"
                        variant="outlined"
                        type="datetime-local"
                    />
                </div>

                <div className="row">

                    <label className="labels" >Destination Airport: </label>
                    
                    <select className="select3"  
                        id="destinationA"
                        label="Please choose an option."
                        variant="outlined"
                        fullwidth="true"
                    >
                        <option value="BEL">Nikola Tesla, BEL</option>
                    </select>

                    <label className="labels" >Arrival Date and Time:</label>

                    <TextField className="dateandtime1"
                        id="arrival"
                        variant="outlined"
                        type="datetime-local"
                    />
                </div>

                <label className="labels" >Duration:</label>

                <TextField className="fields"
                    id="duration"
                    label="Duration"
                    variant="outlined"
                    fullwidth="true"
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />

                <label className="labels" >TicketPrice:</label>

                <TextField className="fields"
                    id="ticketPrice"
                    label="Ticket Price"
                    variant="outlined"
                    fullwidth="true"
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />

                <label className="labels" >Capacity:</label>

                <TextField className="fields"
                    id="capacity"
                    label="Capacity"
                    variant="outlined"
                    fullwidth="true"
                    onChange={(e) => handleChange('flightid', e.target.value)}
                />


               <Button className="confirmButton" onClick={() => handleSubmit()} variant="contained">Add</Button>
            </div>
        </div>

         </div>   
   

}


export default AddFlight 