import { useSelector } from "react-redux"

const useLogin = ()=>{
    const token = useSelector(state=>state.TokenState.token)
    if (!token) return false
    return true
}

export default useLogin