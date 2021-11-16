import { createContext } from 'react';

import { IFirebaseContextData } from './types';

export const FirebaseContext = createContext<IFirebaseContextData>(
  {} as IFirebaseContextData,
);
