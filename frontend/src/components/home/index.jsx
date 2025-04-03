import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { homeLoadMore } from "../../store/actions/articles";

const Home = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.articles.length <= 0) {
      dispatch(homeLoadMore(articles.homeSort));
    }
  }, []);
  return <>Home</>;
};

export default Home;
