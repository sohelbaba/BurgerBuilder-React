import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-react-app-ceb89-default-rtdb.firebaseio.com/'
})

export default instance