import React, { Component } from 'react';
import { connect, connnect } from 'react-redux';
// import { fetchUnits } from '../../actions';
import { Card, Button } from 'react-bootstrap';

class UnitContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchUnits()
  // }

  renderUnits() {
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
      </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }

  render() {
    return (
      <div>
        {this.renderUnits()}
      </div>
    )
  }
}

// function mapStateToProps({ surveys }) {
//   return { surveys };
// }

// export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

export default UnitContainer;