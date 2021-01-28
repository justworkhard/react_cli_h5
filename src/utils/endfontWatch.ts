import axios from 'axios'

function upLoadError(location: string, url: string) {
    axios.post('http://localhost:3001/upLoadError', {
        location: location,
        url: url
    })
}


export default upLoadError