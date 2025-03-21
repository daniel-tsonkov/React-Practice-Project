import { useFormik, FieldArray, FormikProvider } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminTitle } from '../../../../utils/tools';

const AddArticle = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <>
      <AdminTitle title="Add articles" />
      Add article
    </>
  );
};

export default AddArticle;
