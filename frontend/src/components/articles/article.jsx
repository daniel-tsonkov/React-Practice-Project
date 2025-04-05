import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticle } from "../../store/actions/articles";

const Article = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getArticle(id));
  }, id);

  return <></>;
};

export default Article;
