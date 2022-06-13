import { useSelector } from "react-redux"


const usePost = ()=>{
    const post = useSelector(state=>state.CurrentPostState.post)
    return post
}

export default usePost