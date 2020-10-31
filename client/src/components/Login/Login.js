import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in or Register with:
      </Header>
    <Button as={Link} to='http://localhost:3000/auth/google' color='teal' fluid size='large'>
        Google
    </Button>
    </Grid.Column>
  </Grid>
)

export default Login