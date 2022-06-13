import {useSelector} from 'react-redux'

const useToken = ()=>{
    const token = useSelector(state=>state.TokenState.token)
    return token
}

export default useToken