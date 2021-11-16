import React, { useCallback, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  Analytics,
  getAnalytics,
  logEvent as analyticsLogEvent,
} from 'firebase/analytics';

import { ILogEvent, FirebaseContext } from '.';

export const FirebaseProvider: React.FC = ({ children }) => {
  const [analytics, setAnalytics] = useState<Analytics>({} as Analytics);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };

    initializeApp(firebaseConfig);
    setAnalytics(getAnalytics());
  }, []);

  const logEvent: ILogEvent = useCallback(
    (event, params) => {
      analyticsLogEvent(analytics, event as never, params);
    },
    [analytics],
  );

  return (
    <FirebaseContext.Provider value={{ logEvent }}>
      {children}
    </FirebaseContext.Provider>
  );
};
