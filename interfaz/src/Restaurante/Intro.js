import {Link} from "react-router-dom";

const CompIntro = () => { 
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                   <h1>INGRESO</h1>
                   <tr></tr>
                   <Link to ="/show" className='btn btn-primary'>Administrador</Link>&nbsp;&nbsp;
                   &nbsp;<Link to ="/cliente" className='btn btn-primary'>Usuario</Link>
                </div>
            </div>

        </div>
    )
}

export default CompIntro