import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from 'store/companies';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.companies.loading);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return <div>{loading ? 'LOADING' : 'NOTLOADING'}</div>;
};

export default Home;
