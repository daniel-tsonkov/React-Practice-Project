import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

const Article = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    return <></>
}

export default Article; 