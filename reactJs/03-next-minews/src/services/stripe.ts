import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'minews',
            version
        }
    }
);