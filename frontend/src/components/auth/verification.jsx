import { useDispatch } from "react-redux";
import { Loader } from "../../utils/tools";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AccountVerify = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const token = search.get("t");

  useEffect(() => {
    if (token) {
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Loader />
    </>
  );
};

export default AccountVerify;
