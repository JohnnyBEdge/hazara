const axios = require('axios');

const baseURL = 'https://uha-back.herokuapp.com/api/events'
// const baseURL = 'https://uha-backend.netlify.app/api/events'

export const getEvents = async () => {
    try{
        const res = await axios.get(`${baseURL}`);
        return res;
    } catch(err){
        console.log("Error:",err)
    }
}

export const handleAddEvent = async (newData) => {
    const config = {
        method : 'POST',
        headers: {
            "Content-type": "application/json"
        }
    }
    try{
        await axios.post(`${baseURL}`,newData, config);
    }catch(err){
        console.log("Add event error:",err)
    }
}

export const handleDeleteEvent = (id) => {
    const config = {
        method : 'DELETE'
    }
    try{
        axios.delete(`${baseURL}/${id}`,config);
    }catch(err){
        console.log("Delete event error:",err)
    }    
}
export const handleEditEvent = (id, newData) => {
    const dataWithIDRemoved = {title: newData.title, desc: newData.desc, date: newData.date}
    const config = {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        }
    }
    try{
        axios.patch(`${baseURL}/${id}`,dataWithIDRemoved, config);
    }catch(err){
        console.log("Edit event error:",err)
    }
}

