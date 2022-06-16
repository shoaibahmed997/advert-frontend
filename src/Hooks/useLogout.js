import { useDispatch } from "react-redux"


const useLogout=()=>{
    const dispatch = useDispatch()
    localStorage.removeItem("AdvertAppUserDetail")
    localStorage.removeItem("AdvertApptoken")
    dispatch({type:"REMOVE_USER"})
    dispatch({type:"REMOVE_TOKEN"})
}

export default useLogout