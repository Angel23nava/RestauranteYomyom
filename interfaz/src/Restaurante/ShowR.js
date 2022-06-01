import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const URL = 'http://localhost:8000/yomyom/'

const CompShowR = () => { 
    const [Alimento, SetAlimento] = useState([])

    useEffect ( () =>{
        getAlimento ()
    },[])

    const getAlimento = async () => {
        const res = await axios.get(URL)
        SetAlimento(res.data)
    }

    const deleteAlimento = async (idAlimentos) => { 
        await axios.delete(`${URL}${idAlimentos}`)
        getAlimento()
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="bg-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Horario</th>    
                                <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            { Alimento.map( (Alimento) => (
                                <tr key={ Alimento.idAlimentos}>
                                    <td> { Alimento.NombreAlimentos } </td>
                                    <td> { Alimento.Categoria } Tenedores</td>
                                    <td> { Alimento.Horario} </td>
                                    <td> { Alimento.Descripcion } </td>
                                    <td>
                                        <Link to={`/edit/${Alimento.idAlimentos}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deleteAlimento(Alimento.idAlimentos)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                    ))}
                        </tbody>
                    </table>
                    <Link to ="/create" className='btn btn-primary'>Agregar platillo</Link>&nbsp;&nbsp;
                    &nbsp;<Link to ="/" className='btn btn-primary'>Regresar</Link>
                </div>
            </div>

        </div>
    )
}

export default CompShowR