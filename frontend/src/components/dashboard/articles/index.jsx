import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdminTitle } from '../../../utils/tools';

import { getPaginateArticles } from '../../../store/actions/articles';

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

  useEffect(() => {
    dispatch(getPaginateArticles({}));
  }, []);

  return (
    <>
      <AdminTitle title="Articles" />
      <div className="articles_table">
        <ButtonToolbar className="mb-3">
          <ButtonGroup></ButtonGroup>
          <form>
            <InputGroup.Text id="btngr1">@</InputGroup.Text>
            <FormControl />
          </form>
        </ButtonToolbar>
      </div>
    </>
  );
};

export default AdminArticles;
