import { useState, useEffect } from "react"
import "./styles/agendacontacto.css"

const TablaAgenda = (param) => {

    const [contacto, setContacto] = useState(null)
    const [contenido, setContenido] = useState(null)
    const [estiloGrid, setEstiloGrid] = useState(null)
 

    useEffect(() => {
        setContacto(param.props.contactos)
        setContenido(param.props.contenido)
        if (param.props.contenido === "total") {
            setEstiloGrid("grid-container-agenda-final")
        } else {
            setEstiloGrid("grid-container-agenda")
        }
    }, [])

    if (contacto === null || estiloGrid === null) {
        return (
            <h1>Cargando</h1>
        )
    }
    const handleDelete = async (id) => {
        let url = `http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    return (
        <div className={`${estiloGrid} mt-5`}>
            <div className={`grid-item-agenda`}>Foto</div>
            <div className={`grid-item-agenda`}>Apellido</div>
            <div className={`grid-item-agenda`}>Nombre</div>
            <div className={`grid-item-agenda`}>Telefono</div>
            <div className={`grid-item-agenda`}>Email</div>
            {contenido !== "parcial" ?
                <>
                    <div className={`grid-item-agenda`}>Modificar</div>
                    <div className={`grid-item-agenda`}>Borrar</div>
                </>
                :
                ""
            }

            {contacto.map(item => {
                return (
                    <>
                        <div className="grid-item"><img src={item.fotourl}></img></div>
                        <div className="grid-item">{item.apellido}</div>
                        <div className="grid-item">{item.nombre}</div>
                        <div className="grid-item">{item.telefono}</div>
                        <div className="grid-item">{item.email}</div>
                        {contenido !== "parcial" ?
                            <>
                                <div className="grid-item"><a className="btn btn-success" href={`actualizar/${item.id}`}>Modificar</a></div>
                                <div className="grid-item"><button className="btn btn-warning" onClick={() => handleDelete(item.id)}>Borrar</button></div></>
                            :
                            ""
                        }
                    </>
                )
            })}
        </div>
    )
}
export default TablaAgenda