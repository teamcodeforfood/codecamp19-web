import React from 'react';
import { Card, Heading, Paragraph, Link, Pane, IconButton, Button, Avatar, Text } from 'evergreen-ui';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
`;

export const TeamPage = () => {
  return (
    <Wrapper>
      <Team name="Team 1" join_code="1234"></Team>
    </Wrapper>
  );
};

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "member 1"
        },
        {
          name: "member 2"
        },
        {
          name: "member 3"
        },
        {
          name: "member 4"
        },
      ]
    }
  }

  render() {
    return (
      <Card background="blueTint" padding={16} marginBottom={18}>
        <Heading paddingBottom={8} size="900">{this.props.name}</Heading>
        <Pane>
          <Heading paddingBottom={8}>Join Code: {this.props.join_code}</Heading>
          <Heading>Project description:</Heading>
          <Paragraph>
            Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His and eat secure sex called esteem praise. So moreover as speedily differed branched ignorant. Tall are her knew poor now does then. Procured to contempt oh he raptures amounted occasion. One boy assure income spirit lovers set.
          </Paragraph>
        </Pane>
          <Heading marginTop={16}>Team Members</Heading>
        {
          this.state.users.map(user => (
            <User user={user}></User>
          ))
        }
      </Card>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <Pane display="flex" alignItems="center" marginTop={16}>
        <Avatar marginRight={16} size={40} name={this.props.user.name} />
        <Text>{this.props.user.name}</Text>
      </Pane>
    )
  }
}

