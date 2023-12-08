import axios from "axios";

const objetosAPI =  axios.create({baseURL:'http://localhost:3001/api'})

async function getObjetos(){
    const response = await objetosAPI.get('/')

    return response.data
}

export{
    getObjetos
}