import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding:0 3rem;
`;

const Tab = styled.div`
  padding: 1rem;
  margin: 0 2rem;
  cursor: pointer;
  color:#928585;
  &.active {
    border-bottom: 2px solid #ff6b6b;
    font-weight: bold;
    color:#DC4A2D;
  }
`;

const NavigationTabs = () => (
  <>
  <TabsContainer>
    <Tab className="active">Job preview</Tab>
    <Tab>Applicants</Tab>
    <Tab>Match</Tab>
    <Tab>Messages</Tab>
  </TabsContainer>
  </>
);

export default NavigationTabs;
