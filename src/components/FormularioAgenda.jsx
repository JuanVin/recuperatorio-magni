
import { useState } from "react"
import apiCalls from "./apiCalls"
import { useParams } from "react-router-dom"

const FormularioAgenda = () => {

    let { id } = useParams()
    const [apellido, setApellido] = useState('')
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [response, setResponse] = useState('')

    const traerInputs = async () => {
        let datos
        if (id) {
            datos = {
                id: id,
                apellido: apellido,
                nombre: nombre,
                telefono: parseInt(telefono),
                email: email,
                fotourl: foto
            }
            setResponse(await apiCalls.alctualizarElemento(datos))
        }
        else {
            datos = {
                apellido: apellido,
                nombre: nombre,
                telefono: parseInt(telefono),
                email: email,
                fotourl: foto
            }
            setResponse(await apiCalls.cargarNuevoElemento(datos))
        }
    }

    console.log(apellido)
    return (
        <>  
            {response.rta}
            <div className="w-50 mt-5">
                <div class="form-group">
                    <label for="exampleInputEmail1">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => { setApellido(e.target.value) }} className="form-control" id="apellido" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value) }} className="form-control" id="nombre" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} className="form-control" id="telefono" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Foto</label>
                    <input type="text" value={foto} onChange={(e) => { setFoto(e.target.value) }} className="form-control" id="foto" placeholder="Enter email"></input>
                </div>
                <button className="btn btn-success mt-3" onClick={traerInputs}>Cargar</button>
            </div>

        </>
    )
}
export default FormularioAgenda