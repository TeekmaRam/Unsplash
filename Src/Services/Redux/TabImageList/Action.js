import axios from 'axios'
import { IMAGE_LIST } from './Type'
import Callservices, { callTypes } from '../Utility/Api'


export const ImageCatagory = () => async dispatch => {
    const res = await Callservices(callTypes.get) //callTypes.get
    const payload = res
    dispatch({ type: IMAGE_LIST, payload })
    return payload
}

