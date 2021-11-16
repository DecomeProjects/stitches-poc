import { EventNameString, EventParams } from 'firebase/analytics';

export type ILogEvent = (event: EventNameString, params?: EventParams) => void;

export type IFirebaseContextData = {
  logEvent: ILogEvent;
};
