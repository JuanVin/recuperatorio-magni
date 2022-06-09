import { useState, useEffect } from "react"
import apiCalls from "./apiCalls"
import TablaAgenda from "./TablaAgenda"
const TablaContactos = () => {

    const [contactos, setContactos] = useState(null)
    useEffect(() => {
        traerContactos()
    }, [])

    const traerContactos = async () => {
        setContactos(await apiCalls.traerElementos())
    }

    if (contactos === null) {
        return <h1>Cargando</h1>
    }
    console.log(contactos)
    return (
        <TablaAgenda props={{ contactos: contactos, contenido: "total" }}></TablaAgenda>
    )

}
export default TablaContactos