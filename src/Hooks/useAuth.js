import {useSelector} from 'react-redux'

const useAuth = ()=>{
   
    const user = useSelector(state=>state.UserState.user)
    return user
}

export default useAuth