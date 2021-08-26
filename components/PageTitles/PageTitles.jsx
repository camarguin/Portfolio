import React from 'react';
import { HrTitleLine, PageTitleH1, PageTitleH2, PageTitlesContainer, PageTitle2Container } from './styles';

const PageTitles = ({ pageTitle1, pageTitle2 }) => {
  return (
    <PageTitlesContainer>
      <PageTitle2Container>
        <HrTitleLine />
        <PageTitleH2>{pageTitle1}</PageTitleH2>
      </PageTitle2Container>
      <PageTitleH1>{pageTitle2}</PageTitleH1>
    </PageTitlesContainer>
  );
};

export default PageTitles;