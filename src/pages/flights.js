import Header from "@/components/Header"
import { Button, TextField } from "@mui/material"
import { useState } from "react"



const Flights = () => {

    const [data, setData] = useState({})

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(data)
    }

    return  <div id='flights'>

        <Header/>

        <div>
            <h1 className="headerFlights">FLIGHTS</h1>
        </div>

        

        <div>

            <div className="container1">
                <label className="" >Departure Date and Time:</label>
                <TextField className="dateandtime"
                    variant="outlined"
                    type="datetime-local"
                />
                <label className="" >Departure Airport:</label>

                <select className="select1"
                        id="destinationA"
                        label="Please choose an option."
                        variant="standard"
                        fullwidth="true"
                    >
                        <option value="BEL">Nikola Tesla, BEL</option>
                </select>

                <label className="" >Destination Airport:</label>
                <select className="select1"
                        id="destinationA"
                        label="Please choose an option."
                        variant="outlined"
                        fullwidth="true">
                    <option value="BEL">Nikola Tesla, BEL</option>
                </select>

                <label className="" >Number of Passengers:</label>
                <select className="select2"
                        id="destinationA"
                        label="Please choose an option."
                        variant="outlined"
                        fullwidth="true">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
            </div>


            <table className="styled-table">
                <tbody>
                    
                    <tr>
                        <th>Flight ID</th>
                        <th>Departure airport</th>
                        <th>Departure date and time</th>
                        <th>Destination airport</th>
                        <th>Arrival date and time</th>
                        <th>Ticket price</th>
                    </tr>
                </tbody>
            </table>
            
            <div>
            <Button className="button" onClick={() => handleSubmit()} variant="contained">Delete</Button>
            </div>

            <div>
            <Button className="button1" link="true" href={'/addflight'} variant="contained">Add Flight</Button>
            </div>
            
        </div>


    </div>   


}

export default Flights

