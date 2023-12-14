'use client';
import { Container, useTheme } from '@mui/material';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { MainBox } from '@/components/CommonComponents/Common-сomponents-style';
import InfoPageContent from '@/components/Info-page/info-page-content';
import { selectAccessKey } from '@/store/slices/sessionSlice';

export default function ConfirmYourEmail() {
  const theme = useTheme();
  const accessKey = useSelector(selectAccessKey);

  return (
    <MainBox>
      <Container
        sx={{ maxWidth: theme.breakpoints.values.containersMd }}
        maxWidth={false}
      >
        <InfoPageContent
          imgSrc={'/checking-info.png'}
          imgAlt={'our analytic is ckecking each users'}
          titleText={'Confirm your email'}
          mainText={`We sent an email to ${accessKey ?? 'your email'}.
              Until you confirm the email, you will not be able to use some of the functionality of the platform`}
          buttonText={"OK, I'll confirm"}
          buttonLink={'/'}
        />
      </Container>
    </MainBox>
  );
}
