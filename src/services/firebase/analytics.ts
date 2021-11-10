import { getAnalytics } from 'firebase/analytics';
import { app } from './app';

export const analyticsInstance = getAnalytics(app);
