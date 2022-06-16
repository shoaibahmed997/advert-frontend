import { useSelector } from "react-redux"
import useAuth from "./useAuth"

const useLogin = ()=>{
    const token = useSelector(state=>state.TokenState.token)
    const user = useAuth()
    if (!user.Email || !user.firstname)return false
    if (!token) return false
    return true
}

export default useLogin