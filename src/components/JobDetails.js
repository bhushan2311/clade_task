import React from "react";
import styled from "styled-components";

const JobDetailsContainer = styled.div`
  padding: 1rem 5rem;
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  padding:3px 2px;
`;

const JobTitle = styled.h1`
  font-weight: bold;
`;

const JobInfo = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
`;

const JobStatus = styled.div`
  color: #28a745;
  font-weight: bold;
`;

const About = styled.div`
  margin: 2rem 0;
`;

const AboutTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #928585;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: #928585;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eae2e2;
  border-radius: 5px;
  margin-right: 8rem;
  padding: 3px 6px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem;
  gap: 1.6rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const JobDetails = () => (
  <JobDetailsContainer>
    <JobHeader>
      <JobTitle>Senior Product Designer</JobTitle>
      <Title style={{fontSize:'5px',fontSize: '13px',margin: '0px', padding:'0 13px'}}>posted 2 days ago</Title>
      <JobStatus>Open</JobStatus>
    </JobHeader>
    <JobHeader style={{marginBottom: '2rem'}}>
      <JobInfo>
        <div style={{display:'flex'}}>
          <Icon src="/assets/location.png" alt="Adobe Illustrator" />
          Delaware, USA
        </div>
        <div style={{display:'flex'}}>
          <Icon src="/assets/package.png" alt="Adobe Illustrator" />
          $300K-$400K
        </div>
      </JobInfo>
    </JobHeader>
    <hr />

    <Container>
      <Section>
        <Title>Skills Required</Title>
        <ItemsWrapper>
          <Item style={{ marginRight: "12rem" }}>
            <Icon src="/assets/image 1.png" alt="Figma" />
            <Text>Figma</Text>
          </Item>
          <Item>
            <Icon src="/assets/image 2.png" alt="Adobe Illustrator" />
            <Text>Adobe Illustrator</Text>
          </Item>
          <Item style={{ marginRight: "12rem" }}>
            <Icon src="/assets/image 6.png" alt="Adobe XD" />
            <Text>Adobe XD</Text>
          </Item>
        </ItemsWrapper>
      </Section>
      <Section>
        <Title>Preferred Language</Title>
        <ItemsWrapper>
          <Text style={{fontWeight:'500'}}>English</Text>
        </ItemsWrapper>
      </Section>
      <Section>
        <Title>Type</Title>
        <ItemsWrapper>
          <Text style={{fontWeight:'500'}}>Full time</Text>
        </ItemsWrapper>
      </Section>
      <Section>
        <Title>Years of Experience</Title>
        <ItemsWrapper>
          <Text style={{fontWeight:'500'}}>3+ Years of Experience</Text>
        </ItemsWrapper>
      </Section>
    </Container>

    <hr />
    <About>
      <AboutTitle>About the job</AboutTitle>
      <AboutText>
        <ol>
         <li>Handle the UI/UX research design</li>
         <li>Work on researching on latest web applications designs & trends</li>
         <li>Work on conceptualizing and visualizing</li>
         <li>Work on creating graphics content and other graphic related works</li>
        </ol>
        Benefits:
        <ul>
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        Schedule:
        <ul>
          <li>Day shift</li>
        </ul>
        Supplemental pay types:
        <ul>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        Work Location: In person
      </AboutText>
    </About>

    <div
      style={{ display: "flex", position: "relative", padding: "1.5rem 0px" }}
    >
      <Icon
        style={{ width: "2rem", height: "2rem" }}
        src="/assets/Rectangle 43.png"
        alt="Atlassian"
      />
      <Text style={{ fontSize: "1.5rem" }}>Atlassian</Text>
    </div>
    <AdditionalInfo>
      <Box>
        <Title>Company Size</Title>
        <Info>1k - 2k Employees</Info>
      </Box>
      <Box>
        <Title>Type</Title>
        <Info>Private</Info>
      </Box>
      <Box>
        <Title>Sector</Title>
        <Info>Information technology, Infrastructure</Info>
      </Box>
      <Box>
        <Title>Funding</Title>
        <Info>Bootstapped</Info>
      </Box>
      <Box>
        <Title>Founded In</Title>
        <Info>2019</Info>
      </Box>
      <Box>
        <Title>Founded By</Title>
        <Info>Scott Farquhar, Mike Cannon-Brookes</Info>
      </Box>
    </AdditionalInfo>
  </JobDetailsContainer>
);

export default JobDetails;

const Info = styled.p`
  margin: -2px 0;
`;
