export interface IEnvironment {
  app: {
    port: number;
  };
  isValid: () => boolean;
}
