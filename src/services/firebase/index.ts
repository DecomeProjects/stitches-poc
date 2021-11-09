import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { firebaseConfig } from './config';

if (process.env.NODE_ENV !== 'development') {
  const app = initializeApp(firebaseConfig);

  getAnalytics(app);
}
