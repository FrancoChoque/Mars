import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCompanies } from 'store/companies';
import styled from 'styled-components';

import CompaniesTable from './Tables/CompaniesTable';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Companies = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.companies.loading.fetchCompanies);
  const companies = useSelector(state => state.companies.data);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <Container>
      {loading || Boolean(!companies.length) ? (
        <div>Loading Companies</div>
      ) : (
        <CompaniesTable data={companies} />
      )}
    </Container>
  );
};

export default Companies;
