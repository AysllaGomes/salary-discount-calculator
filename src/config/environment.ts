import { IEnvironment } from '../models/interface/environment.models';

export const environment: IEnvironment = {
  app: {
    port: 3000,
  },
  isValid(): boolean {
    return true;
  },
};
