import React from 'react';
import { Button } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const CheckoutCredit1 = ({ name, description, amount, color, onToken }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  >
    <Button outline color={color}>
      1 Credit
    </Button>
  </StripeCheckout>
);

const CheckoutCredit2 = ({ name, description, amount, color, onToken }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  >
    <Button outline color={color}>
      3 Credits
    </Button>
  </StripeCheckout>
);

const CheckoutCredit3 = ({ name, description, amount, color, onToken }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  >
    <Button outline color={color}>
      5 Credits
    </Button>
  </StripeCheckout>
);

export { CheckoutCredit1, CheckoutCredit2, CheckoutCredit3 };
