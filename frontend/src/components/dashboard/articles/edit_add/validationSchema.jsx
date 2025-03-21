import * as Yup from 'yup';

export const formValues = {
  title: '',
  content: '',
  excerpt: '',
  score: '',
  director: '',
  actors: [],
  status: 'draft',
  category: '',
};

export const validation = () => {
  Yup.object({
    title: Yup.string().required('The title is required'),
    content: Yup.string()
      .required('The content is required')
      .min(50, 'That is it ? ...write some more.'),
    excerpt: Yup.string()
      .required('Excerpt is required')
      .max(500, 'Sorry 500 max.'),
    score: up
      .number()
      .required('Score is required')
      .min(50, '0 is the minimum.')
      .max(100, 'Sorry 100 is the maximum.'),
    director: Yup.string().required('The director is required'),
    actors: Yup.array()
      .required('The actors is required')
      .min(3, '3 actors is the minimum.'),
    status: Yup.string().required('The status is required'),
    category: Yup.string().required('The category is required'),
  });
};
