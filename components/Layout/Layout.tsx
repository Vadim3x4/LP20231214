import { ReactNode, FC, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Footer from './footer';
import Header from './header';
import { MainAndFooterContainer } from './layout-style';
import ModalForm from './Modal-form';
// import { setAccessKey } from '../../store/slices/sessionSlice';

interface IProps {
  children: ReactNode;
}

const RootPageLayout: FC<IProps> = ({ children }) => {
  const [openFormSignInModal, setOpenFormSignInModal] = useState(false);
  const dispatch = useDispatch();
  const handleOpenSignInModal = () => {
    setOpenFormSignInModal(true);
  };
  const handleCloseSignInModal = () => {
    setOpenFormSignInModal(false);
  };

  return (
    <>
      <Header handleOpenSignInModal={handleOpenSignInModal} />

      <MainAndFooterContainer>
        {children}

        <Footer />
      </MainAndFooterContainer>

      <ModalForm
        handleCloseSignInModal={handleCloseSignInModal}
        openFormSignInModal={openFormSignInModal}
      />
    </>
  );
};

export default RootPageLayout;
