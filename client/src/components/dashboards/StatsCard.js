import React, {Component} from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

class StatsCard extends Component {
  render() {
    return (
      <Card className="text-center" bg='light' border='dark'>
        <Card.Body>
          <Card.Subtitle>
            {this.props.name}
          </Card.Subtitle>
          <Card.Text>
            <Container>
              <Row md={6}>
                <Col>
                  {this.props.icon}
                </Col>
                <Col>
                  <p style={{ fontSize: '35px' }}>{this.props.value}</p>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default StatsCard;