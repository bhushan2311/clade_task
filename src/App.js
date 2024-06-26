import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import JobDetails from './components/JobDetails';
import Sidebar from './components/Sidebar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.div`
  flex: 2;
  padding: 1rem;
`;

const App = () => (
  <AppContainer>
    <Header />
    <NavigationTabs />
    <MainContent>
      <Content>
        <JobDetails />
      </Content>
      <Sidebar />
    </MainContent>
  </AppContainer>
);

export default App;
