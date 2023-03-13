import { process } from './env/Process'
import axios from 'axios'

export const callTypes = {
    get: "GET",
    post: "POST",
}

const url = process.env.REACT_APP_API_URL
export default async function Callservices(callregest) {
    switch (callregest) {
        case callTypes.get: {
            let Getimagelist = await axios.get(url).catch((error) => {
                alert('Erorr')
            })
            return Getimagelist
        }
            break;
    }
} 