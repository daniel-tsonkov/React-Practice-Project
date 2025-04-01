import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminTitle } from "../../../utils/tools";
import { Table, Row, Col } from "react-bootstrap";

import { getCategories } from '../../../store/actions/articles';

const AdminCategories = () => {
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    return (
    <>
   <AdminTitle title="Categories" />
   <Row>
    <Col>
        table
    </Col>
    <Col>
        input
    </Col>
   </Row>
    </>
    )
}

export default AdminCategories;