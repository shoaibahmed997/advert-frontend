import {useSelector} from 'react-redux'

const useAuth = ()=>{
    ```
    returns the user stored in redux store
    ```
    const user = useSelector(state=>state.UserState.user)
    return user
}

export default useAuth