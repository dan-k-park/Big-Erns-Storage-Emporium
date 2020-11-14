import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import authReducer from '../reducers/authReducer';

class Payments extends Component {

  render() {
    return (
      <StripeCheckout
        name='Your Balace:'
        description={this.props.balance}
        amount='5'
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>
          Pay Balance
        </button>
      </StripeCheckout>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state
  return { balance: auth.balance }
}

export default connect(mapStateToProps, actions)(Payments);