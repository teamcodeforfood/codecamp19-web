import React from 'react';
import { Card, Heading, Paragraph, Link, Pane, IconButton, Button } from 'evergreen-ui';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 4em;
`;

export const AdminOverview = () => {
  return (
    <Wrapper>
      <EventInfo></EventInfo>
      <AnnouncementsCard></AnnouncementsCard>
      <Teams></Teams>
      <Judges></Judges>
    </Wrapper>
  );
};

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        name: "Event Name is here",
        owner_user_id: 1,
        starts_at: Date(),
        ends_at: Date(),
        website_url: "https://sebastiandedeyne.com/react-for-vue-developers/",
        location: "1122 E 300 S St. George, Utah",
        description: "Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His and eat secure sex called esteem praise. So moreover as speedily differed branched ignorant. Tall are her knew poor now does then. Procured to contempt oh he raptures amounted occasion. One boy assure income spirit lovers set.",
        logo_url: "./logo",
        max_team_size: "10"
      }
    }
  }

  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1} marginBottom={18}>
        <Heading paddingBottom={8} size="900">{this.state.event.name}</Heading>
        <Pane>
          <Heading>Event description:</Heading>
          <Paragraph>
            {this.state.event.description}
          </Paragraph>
        </Pane>
        <Pane paddingTop={8}>
          <Heading>Event URL: <Link href="#">{this.state.event.website_url}</Link></Heading>
        </Pane>
        <Pane paddingBottom={8}>
          <Heading>Location: {this.state.event.location}</Heading>
        </Pane>
        <Pane>
          <Card>
            <div>Start Time: <span>{this.state.event.starts_at}</span></div>
            <div>End Time: <span>{this.state.event.ends_at}</span></div>
          </Card>
        </Pane>
      </Card>
    );
  }
};

class AnnouncementsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [
        "Food is ready in the courtyard",
        "Don't forget to use the restroom",
        "Cocaine is in the back closet in room 104",
        "Wifi is down, stay tuned for further updates..."
      ],
    }
  }
  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1} marginBottom={16}>
        <Pane display="flex">
          <Pane flex={1}>
            <Heading paddingBottom={16} size={900}>Announcements Manager</Heading>
          </Pane>
        </Pane>
        <div>
          {
            this.state.announcements.map((body) => (
              <Announcement body={body}></Announcement>
            ))
          }
        </div>
        <Pane display="flex" paddingTop={16}>
          <Pane flex={1}></Pane>
          <Pane>
            <Button onClick={() => alert('implement add')}>Add</Button>
          </Pane>
        </Pane>
      </Card>
    );
  }
};

class Announcement extends React.Component {
  render() {
    return (
      <Pane display="flex" paddingTop={4}>
        <Pane flex={1}>
        <Heading>{this.props.body}</Heading>
        </Pane>
        <Pane>
          <IconButton icon="notifications" onClick={() => alert('Are you sure you want to alert?')} marginRight={16}/>
        </Pane>
        <Pane>
          <IconButton icon="delete" onClick={() => alert('Are you sure you want to delete?')}/>
        </Pane>
      </Pane>
    );
  }
};

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          name: "Team 1"
        },
        {
          name: "Team 2"
        },
        {
          name: "Team 3"
        },
        {
          name: "Team 4"
        },
        {
          name: "Team 5"
        },
        {
          name: "Team 6"
        },
        {
          name: "Team 4"
        },
        {
          name: "Team 5"
        },
        {
          name: "Team 6"
        }
      ],
      expand: false,
    }
  }

  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1} marginBottom={16}>
        <Heading size={900} paddingBottom={8}>Teams</Heading>
        <div>
          {
            this.state.expand ? (
              this.state.teams.map((team) => (
                <Team team={team}></Team>
              ))
            ) : (
              this.state.teams.slice(0, 3).map((team) => (
                <Team team={team}></Team>
              ))
            )
          }
        </div>
        <Pane display="flex">
          <Pane flex={1}></Pane>
          <Button onClick={() => this.setState({expand: !this.state.expand})}> . . . </Button>
        </Pane>
      </Card>
    );
  }
}

class Team extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Heading>{this.props.team.name}</Heading>
    );
  }
}

class Judges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judges: [
        {
          name: "Judge 1"
        },
        {
          name: "Judge 2"
        },
        {
          name: "Judge 3"
        },
        {
          name: "Judge 4"
        },
        {
          name: "Judge 5"
        },
        {
          name: "Judge 6"
        }
      ],
      expand: false,
    }
  }

  render() {
    return (
      <Card background="blueTint" padding={16} elevation={1} >
        <Heading size={900} paddingBottom={8}>Judges</Heading>
        <div>
          {
            this.state.expand ? (
              this.state.judges.map((judge) => (
                <Judge judge={judge}></Judge>
              ))
            ) : (
              this.state.judges.slice(0, 3).map((judge) => (
                <Judge judge={judge}></Judge>
              ))
            )
          }
        </div>
        <Pane display="flex">
          <Pane flex={1}></Pane>
          <Button onClick={() => this.setState({expand: !this.state.expand})}> . . . </Button>
        </Pane>
      </Card>
    );
  }
}

class Judge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Heading>{this.props.judge.name}</Heading>
    );
  }
}