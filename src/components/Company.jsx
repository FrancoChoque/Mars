import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'common/Modal';

const Company = ({ company }) => {
  const [showModal, setShowModal] = useState(false);
  const onCompanyClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div role="presentation" onClick={onCompanyClick}>
        {company.name}
      </div>
      <Modal display={showModal} onBackdropClick={() => setShowModal(false)}>
        <div>IM A MODAL</div>
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
