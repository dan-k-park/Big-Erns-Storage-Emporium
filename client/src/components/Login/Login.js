import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in or Register with:
      </Header>
      <a href="/auth/google">Sign In With Google</a>        
    </Grid.Column>
  </Grid>
)

export default Login