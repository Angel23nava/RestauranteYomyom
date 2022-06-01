import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const URLM = 'http://localhost:8000/yomyom/horario/'
const URLT = 'http://localhost:8000/yomyom/horarioT/'
const URLN = 'http://localhost:8000/yomyom/horarioN/'

const CompShowCliente = () => { 
    const [Alimento, SetAlimento] = useState([])
    useEffect ( () =>{
        getAlimento ()
    },[])

    const getAlimento = async () => {
       
        const res = await axios.get(URLM)
        const res2 = await axios.get(URLT)
        const res3 = await axios.get(URLN)
        const time = new Date().getHours()
        if(time >= 7 && time <= 12){
            SetAlimento(res.data)           
        }
        else if (time >= 13 && time <= 17){
            SetAlimento(res2.data)
        }
        else if (time >= 18 && time <= 23 ){
            SetAlimento(res3.data)  
        }
        
    } 

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>MENU DEL DIA</h1>
                    &nbsp;
                    <tr></tr>
                    <table className="table">
                        <thead className="bg-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            { Alimento.map( (Alimento) => (
                                <tr key={ Alimento.idAlimentos}>
                                    <td> { Alimento.NombreAlimentos } </td>
                                    <td> { Alimento.Descripcion } </td>
                                    <td> { Alimento.Categoria } Tenedores </td>
                                </tr>
                    ))}
                        </tbody>
                    </table>
                    <Link to ="/" className='btn btn-primary'>Regresar</Link>
                </div>
            </div>

        </div>
    )
}

export default CompShowCliente