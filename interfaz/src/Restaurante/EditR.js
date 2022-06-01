import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:8000/yomyom/'
const CompEditR = () => {
    const [Nalimento,setNalimento] = useState('')
    const [DescripcionA,setDescripcionA] = useState('')
    const [HorarioA,setHorarioA] = useState('')
    const [CategoriaA,setCategoriaA] = useState('')
    const navigate = useNavigate()
    const {idAlimentos} = useParams()

    const updateRestauranti = async (e) =>{
        e.preventDefault()
        await axios.put(URL+ idAlimentos, {NombreAlimentos: Nalimento, Horario: HorarioA, Categoria: CategoriaA, Descripcion: DescripcionA})
        navigate('/')
    }
    
    useEffect(() =>{
        getAlimentoById()
    },[])

    const getAlimentoById = async () =>{
        const res = await axios.get(URL+idAlimentos)
        setNalimento(res.data.Nalimento)
        setHorarioA(res.data.HorarioA)
        setCategoriaA(res.data.CategoriaA)
        setDescripcionA(res.data.DescripcionA)
    }

    return(
        <div>
            <h3>Editar platillo</h3>
            <form onSubmit={updateRestauranti}>
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
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>

        </div>
    )
}

export default CompEditR