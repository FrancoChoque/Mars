import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'common/Modal';
import CompanyForm from 'components/Forms/CompanyForm';
import { updateCompany } from 'store/companies';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const EditButton = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const Company = ({ company }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const submitCompany = async data => {
    await dispatch(updateCompany({ ...company, ...data }));
    setShowModal(false);
  };
  return (
    <div>
      <EditButton onClick={() => setShowModal(true)}>Edit</EditButton>
      <Modal
        display={showModal}
        onBackdropClick={() => setShowModal(false)}
        header={<div>{company.name}</div>}
      >
        <CompanyForm company={company} onSubmit={submitCompany} />
      </Modal>
    </div>
  );
};

Company.propTypes = {
  company: PropTypes.objectOf(PropTypes.any),
};

Company.defaultProps = {
  company: {},
};

export default Company;
