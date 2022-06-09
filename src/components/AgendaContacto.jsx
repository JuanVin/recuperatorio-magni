import "./styles/agendacontacto.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import apiCalls from "./apiCalls"
import TablaAgenda from "./TablaAgenda"
const AgendaContacto = () => {
    let { letra } = useParams()
    const [nuevaLetra, setNuevaLetra] = useState(letra)
    const [contactos, setContactos] = useState(null)
  
    useEffect(() => {
        traerContactos()
    }, [])

    const traerContactos = async () => {
        if (nuevaLetra !== undefined) {
            let _contactos = await apiCalls.traerElementoPorLetra(nuevaLetra)
            setContactos(_contactos)
        }
        else{
            let _contactos = await apiCalls.traerElementoPorLetra('a')
            setContactos(_contactos)
        }
    }

    return (
        <>
            <div className="grid-container mt-5">
                <div className="grid-item"><a href={`a`}>A</a></div>
                <div className="grid-item"><a href={`b`}>B</a></div>
                <div className="grid-item"><a href={`c`}>C</a></div>
                <div className="grid-item"><a href={`d`}>D</a></div>
                <div className="grid-item"><a href={`e`}>E</a></div>
                <div className="grid-item"><a href={`f`}>F</a></div>
                <div className="grid-item"><a href={`g`}>G</a></div>
                <div className="grid-item"><a href={`h`}>H</a></div>
                <div className="grid-item"><a href={`i`}>I</a></div>
                <div className="grid-item"><a href={`j`}>J</a></div>
                <div className="grid-item"><a href={`k`}>K</a></div>
                <div className="grid-item"><a href={`l`}>L</a></div>
                <div className="grid-item"><a href={`m`}>M</a></div>
                <div className="grid-item"><a href={`n`}>N</a></div>
                <div className="grid-item"><a href={`ñ`}>Ñ</a></div>
                <div className="grid-item"><a href={`o`}>O</a></div>
                <div className="grid-item"><a href={`p`}>P</a></div>
                <div className="grid-item"><a href={`q`}>Q</a></div>
                <div className="grid-item"><a href={`r`}>R</a></div>
                <div className="grid-item"><a href={`s`}>S</a></div>
                <div className="grid-item"><a href={`t`}>T</a></div>
                <div className="grid-item"><a href={`u`}>U</a></div>
                <div className="grid-item"><a href={`v`}>V</a></div>
                <div className="grid-item"><a href={`w`}>W</a></div>
                <div className="grid-item"><a href={`x`}>X</a></div>
                <div className="grid-item"><a href={`y`}>Y</a></div>
                <div className="grid-item"><a href={`z`}>Z</a></div>
            </div>
            {
                ((contactos === null) ?
                    <h1 className="mt-5 text-center">Sin datos</h1>
                    :
                    <>
                        <TablaAgenda props={{ contactos: contactos, contenido: "parcial" }}></TablaAgenda>
                    </>
                )
            }
        </>
    )
}
export default AgendaContacto