import { useContext } from 'react';

import { FirebaseContext, IFirebaseContextData } from '.';

export const useFirebase = (): IFirebaseContextData => {
  const context = useContext(FirebaseContext);

  if (!context)
    throw new Error('useFirebase must be used within a FirebaseProvider');

  return context;
};
