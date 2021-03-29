import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from 'store/companies';
import Company from './Company';

const Companies = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.companies.loading);
  const companies = useSelector(state => state.companies.data);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading Companies</div>
      ) : (
        companies.map(each => <Company key={each.id} company={each} />)
      )}
    </div>
  );
};

export default Companies;
