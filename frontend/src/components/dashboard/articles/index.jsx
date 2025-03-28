import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdminTitle } from '../../../utils/tools';

import PaginateComponent from './paginate';
import {
  getPaginateArticles,
  changeStatusArticle,
} from '../../../store/actions/articles';

import {
  Modal,
  Button,
  ButtonToolbar,
  ButtonGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminArticles = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //// PAGINATE FUNC

  const goToPrevPage = (page) => {
    dispatch(getPaginateArticles({ page }));
  };

  const goToNextPage = (page) => {
    dispatch(getPaginateArticles({ page }));
  };

  const goToEdit = (id) => {
    navigate(`/dashboard/articles/edit/${id}`);
  };

  const handleStatusChange = (status, _id) => {
    let newStatus = status === 'draft' ? 'public' : 'draft';
    dispatch(changeStatusArticle({ newStatus, _id }));
  };

  ///////////

  useEffect(() => {
    dispatch(getPaginateArticles({}));
  }, []);

  return (
    <>
      <AdminTitle title="Articles" />
      <div className="articles_table">
        <ButtonToolbar className="mb-3">
          <ButtonGroup className="me-2">
            <LinkContainer to="/dashboard/articles/add">
              <Button variant="secondary">Add article</Button>
            </LinkContainer>
          </ButtonGroup>
          <form>
            <InputGroup>
              <InputGroup.Text id="btngr1">@</InputGroup.Text>
              <FormControl type="text" placeholder="Search" />
            </InputGroup>
          </form>
        </ButtonToolbar>

        <>
          <PaginateComponent
            articles={articles.adminArticles}
            goToEdit={(id) => goToEdit(id)}
            goToPrevPage={(page) => goToPrevPage(page)}
            goToNextPage={(page) => goToPrevPage(page)}
            handleStatusChange={(status, id) => handleStatusChange(status, id)}
          />
        </>
      </div>
    </>
  );
};

export default AdminArticles;
