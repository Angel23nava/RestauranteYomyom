import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = 'http://localhost:8000/yomyom/'
const CompCreateR = () => {
    const [Nalimento,setNalimento] = useState('')
    const [DescripcionA,setDescripcionA] = useState('')
    const [HorarioA,setHorarioA] = useState('')
    const [CategoriaA,setCategoriaA] = useState('')
    const navigate = useNavigate()

    const Restauranti = async (e) =>{
        e.preventDefault()
        await axios.post(URL, {NombreAlimentos: Nalimento, Horario: HorarioA, Categoria: CategoriaA, Descripcion: DescripcionA})
        navigate('/')
    }
    
    return(
        <div>
            <h3>Crear platillo</h3>
            <form onSubmit={Restauranti}>
                <div className="mb-3">
                    <label className="form-label">Nombre de Alimento</label>
                    <input value={Nalimento} onChange={(e)=>setNalimento(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Horario</label>
                    <input value={HorarioA} onChange={(e)=>setHorarioA(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Categoria</label>
                    <input value={CategoriaA} onChange={(e)=>setCategoriaA(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion de Alimento</label>
                    <textarea value={DescripcionA} onChange={(e)=>setDescripcionA(e.target.value)} type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

        </div>
    )
}

export default CompCreateR