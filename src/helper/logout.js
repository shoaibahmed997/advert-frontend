import store from '../Redux/store'

const logout = () => {
    localStorage.removeItem("AdvertAppUserDetail")
    localStorage.removeItem("AdvertApptoken")
    store.dispatch({type:"REMOVE_USER"})
    store.dispatch({type:"REMOVE_TOKEN"})
}

export default logout