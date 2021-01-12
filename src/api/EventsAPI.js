const axios = require('axios');

export const getEvents = async () => {
    try{
        const res = await axios.get('http://localhost:5005/api/events');
        // console.log("AXIOSS RESS", res.data);
        return res;
    } catch(err){
        console.log("Error:",err)
    }
}

