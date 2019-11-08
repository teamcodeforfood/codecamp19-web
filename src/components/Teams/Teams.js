import React from 'react';
import { Card, Heading, Pane, Button } from 'evergreen-ui';


export const Teams = () => {
  return (
    <div>
      <TeamsList></TeamsList>
    </div>
  );
};

class TeamsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          name: "Team 1",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 2",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 3",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 4",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 5",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 6",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 4",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 5",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        },
        {
          name: "Team 6",
          event_id: 1,
          join_code: "joincodehere",
          project_description: "This is the descriptions here...",
          division_id: 2,
          room_number: 100,
          table_number: 62
        }
      ],
      expand: false,
    }
  }

  render() {
    return (
      <Card padding={16} marginBottom={16}>
        <Heading size={900} paddingBottom={8}>Teams</Heading>
        <div>
          {
            this.state.teams.map((team) => (
              <Team team={team}></Team>
            ))
          }
        </div>
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
      <Card padding={16} marginTop={16} elevation={1}>
        <Pane display="flex">
          <Pane flex={1}>
            <Heading>{this.props.team.name}</Heading>
          </Pane>
          <Pane>
            <Heading>Join Code: {this.props.team.join_code}</Heading>
          </Pane>
        </Pane>
        <Heading paddingTop={4}>Project Description:</Heading>
        <div>{this.props.team.project_description}</div>
      </Card>
    );
  }
}