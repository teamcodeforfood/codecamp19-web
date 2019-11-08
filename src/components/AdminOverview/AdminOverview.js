import React from 'react';
import { Card, Heading, Paragraph, Link, Pane } from 'evergreen-ui';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 4em;
`;

export const AdminOverview = () => {
  return (
    <Wrapper>
      <EventInfo></EventInfo>
    </Wrapper>
  );
};

export const EventInfo = () => {
  return (
    <Card background="blueTint" padding={16} elevation={1}>
      <Heading paddingBottom={8} size="900">Event Name is right here</Heading>
      <Pane>
        <Heading>Event description:</Heading>
        <Paragraph>
          Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His and eat secure sex called esteem praise. So moreover as speedily differed branched ignorant. Tall are her knew poor now does then. Procured to contempt oh he raptures amounted occasion. One boy assure income spirit lovers set. 
          Blind would equal while oh mr do style. Lain led and fact none. One preferred sportsmen resolving the happiness continued. High at of in loud rich true. Oh conveying do immediate acuteness in he. Equally welcome her set nothing has gravity whether parties. Fertile suppose shyness mr up pointed in staying on respect. 
        </Paragraph>
      </Pane>
      <Pane paddingTop={8}>
        <Heading>Event URL: <Link href="#">This is the websites URL</Link></Heading>
      </Pane>
      <Pane>
        <Heading>Location: <Link href="#">This is the event location</Link></Heading>
      </Pane>
      {/* <Pane>
        <Heading>asdf</Heading>
      </Pane> */}
    </Card>
  );
};