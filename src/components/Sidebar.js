import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  padding: 42px 2rem;
  border-left: 1px solid #e0e0e0;
`;

const Button = styled.button`
display:flex;
align-items:center;
justify-content-center;
  background: #ff6b6b;
  color: white;
  padding: 0.5rem 2.5rem;
  border: none;
  margin: 1rem 5px;
  cursor: pointer;
  border-radius: 8px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Stat = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Para = styled.p`
  font-weight: bold;
  margin-left: 1rem;
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

const Sidebar = () => (
  <SidebarContainer>
    <div style={{ display: "flex" }}>
      <Button
        style={{
          backgroundColor: "#FEF4F2",
          color: "#DC4A2D",
          border: "1px solid #DC4A2D",
        }}
      >
        <Icon src="/assets/trash.png" alt="Adobe Illustrator" />
        Delete job
      </Button>
      <Button
        style={{
          backgroundColor: "#DC4A2D",
          color: "#FEF4F2",
          border: "1px solid #FEF4F2",
        }}
      >
        <Icon src="/assets/Icon6.png" alt="Adobe Illustrator" />
        Edit job
      </Button>
    </div>

    <Stats>
      <Stat>
        <Icon src="/assets/Icon4.png" alt="Adobe Illustrator" />
        <Span>Applicants</Span>
        <Para class>400</Para>
      </Stat>
      <Stat>
        <Icon src="/assets/Icon5.png" alt="Adobe Illustrator" />
        <Span>Matches</Span>
        <Para>100</Para>
      </Stat>
      <Stat>
        <Icon src="/assets/Icon.png" alt="Adobe Illustrator" />
        <Span>Messages</Span>
        <Para>147</Para>
      </Stat>
      <Stat>
        <Icon src="/assets/eye.png" alt="Adobe Illustrator" />
        <Span>Views</Span>
        <Para>800</Para>
      </Stat>
    </Stats>
  </SidebarContainer>
);

export default Sidebar;
