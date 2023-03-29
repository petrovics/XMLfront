import Header from "@/components/Header"
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { images } from "../../next.config"
import image from "./images/download.jpg";



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

    return <div id='flights' style={{ backgroundImage: `url('${image}')` }}>

        <Header/>
        <div>
            <h1 className="headerFlights">FLIGHTS</h1>
        </div>

        

   <div>

        <div class="container1">
            <label className="" >Departure Date and Time:</label>
            <TextField 
                variant="outlined"
                type="datetime-local"
            />
            <label className="" >Departure Airport:</label>
            <select 
                    id="destinationA"
                    label="Please choose an option."
                    variant="outlined"
                    fullWidth
                
                >
                    <option value="BEL">Nikola Tesla, BEL</option>
                </select>
            <label className="" >Destination Airport:</label>
            <select 
                    id="destinationA"
                    label="Please choose an option."
                    variant="outlined"
                    fullWidth
                
                >
                    <option value="BEL">Nikola Tesla, BEL</option>
                </select>
            <label className="" >Number of Passengers:</label>
            <select 
                    id="destinationA"
                    label="Please choose an option."
                    variant="outlined"
                    fullWidth
                
                >
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


            <table class="styled-table">
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
            <Button className="button1" Link href={'/addflight'} variant="contained">Add Flight</Button>
            </div>
            </div>

         </div>   
   

}

export default Flights

