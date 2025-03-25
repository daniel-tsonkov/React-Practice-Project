import { useSelector, useDispatch } from 'react-redux';
import { AdminTitle } from '../../../utils/tools';

const AdminArticles = () => {
  const articles = useSelector();

  return (
    <>
      <AdminTitle title="Articles" />
      admin articles index
    </>
  );
};

export default AdminArticles;
