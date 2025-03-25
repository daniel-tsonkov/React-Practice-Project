import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdminTitle } from '../../../utils/tools';

const AdminArticles = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <AdminTitle title="Articles" />
      admin articles index
    </>
  );
};

export default AdminArticles;
