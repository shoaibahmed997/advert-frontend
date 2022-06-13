import {useSelector} from 'react-redux'

const useToken = ()=>{
    ```
    returns the user stored in redux store
    ```
    const token = useSelector(state=>state.TokenState.token)
    return token
}

export default useToken