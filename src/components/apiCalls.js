let apiCalls = {
    traerElementos: async () => {
        return await (await fetch("http://168.194.207.98:8081/api_contacto/get_contactos.php")).json()
    },
    traerElementoPorLetra: async (letra) => {
        return await (await fetch(`http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=${letra}`)).json()
    },
    cargarNuevoElemento: async (body) => {

        let url = `http://168.194.207.98:8081/api_contacto/post_contacto.php`,
            options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body),
                mode: 'cors'
            },
            response
        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response
    },
    alctualizarElemento: async (body) => {
        let url = `http://168.194.207.98:8081/api_contacto/put_contacto.php`,
            options = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body),
                mode: 'cors'
            },
            response
        try {
            response = await fetch(url, options)
            response = await response.json()
        } catch (e) {
            console.log(e)
        }
        return response
    }
}
export default apiCalls