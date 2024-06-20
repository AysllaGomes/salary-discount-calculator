export interface IEnvironment {
  app: {
    port: number;
    web_url: string;
  };
  isValid: () => boolean;
}
