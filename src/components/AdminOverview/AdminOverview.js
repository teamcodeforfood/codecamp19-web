import React from 'react';
import { Card, Heading, Paragraph, Link, Pane, IconButton } from 'evergreen-ui';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 4em;
`;

export const AdminOverview = () => {
  return (
    <Wrapper>
      <EventInfo></EventInfo>
      <AnnouncementsCard></AnnouncementsCard>
    </Wrapper>
  );
};

class EventInfo extends React.Component {
  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1} marginBottom={18}>
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
        <Pane paddingBottom={8}>
          <Heading>Location: <Link href="#">This is the event location</Link></Heading>
        </Pane>
        <StartTimer></StartTimer>
      </Card>
    );
  }
};

export const StartTimer = () => {
  return (
    <Pane>
      <Card>
        <div>Start Time: <span>start time here</span></div>
        <div>End Time: <span>end time here</span></div>
        <div>Time remaining: <span>??</span></div>
      </Card>
    </Pane>
  );
};

class AnnouncementsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Announcements: [
        "Prepared is me marianne pleasure",
        "Prepared is me marianne pleasure",
        "Prepared is me marianne pleasure",
        "Prepared is me marianne pleasure"
      ]
    }
  }

  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1}>
        <Pane display="flex">
          <Pane flex={1}>
            <Heading paddingBottom={16} size={900}>Announcements Manager</Heading>
          </Pane>
          <Pane>
            <IconButton icon="add"/>
          </Pane>
        </Pane>
        <Announcement></Announcement>
      </Card>
    );
  }
};

export const Announcement = () => {
  return (
    <Pane display="flex">
      <Pane flex={1}>
        <Heading>The announcement body goes here.</Heading>
      </Pane>
      <Pane>
        <IconButton icon="edit" marginRight={16}/>
      </Pane>
      <Pane>
        <IconButton icon="notifications" onClick={() => alert('Are you sure you want to alert?')} marginRight={16}/>
      </Pane>
      <Pane>
        <IconButton icon="delete" marginRight={16}/>
      </Pane>
    </Pane>
  );
};