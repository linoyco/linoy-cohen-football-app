import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import AppRoutes from './AppRoutes';

const GlobalStyles: any = createGlobalStyle`
  html{    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    height: 94%;
    width: 97%;
    overflow: hidden;
  }
  body{
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
  }
`;

const StyledAppDiv: any = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledError: any = styled.p`
	font-size: 12px;
	color: red;
  height: 12px;
  font-weight: bold;
`;

const App: React.FunctionComponent = () => {

  const error: string = useSelector((state: any) => state.app.errorMessage);

  const globalErr = (error ? <StyledError>{error}</StyledError> : null);

  return (
    <StyledAppDiv>
      {globalErr}
      <GlobalStyles />
      <AppRoutes />
    </StyledAppDiv>
  );
}

export default App;
