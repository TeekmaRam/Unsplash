import { IMAGE_LIST } from './Type'

const initialState = {
    ImageData: [],
}


export const Imagelistreducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case IMAGE_LIST:
            return {
                ...state,
                ImageData: payload
            }
    }
    return { ...state }
}




