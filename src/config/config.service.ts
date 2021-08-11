import { config, parse } from 'dotenv';
import * as fs from 'fs';
config();

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevEnv = process.env.NODE_ENV !== 'production';

    if (isDevEnv) {
      const envFilePath = `${__dirname}/../../.env`;
      const existsPath = fs.existsSync(envFilePath);
      if (existsPath) {
        const data = parse(fs.readFileSync(envFilePath));
        console.log(data);
        this.envConfig = data;
      } else {
        throw new Error('No existe el archivo .env en la ruta raiz');
      }
    } else {
      this.envConfig = { PORT: process.env.PORT };
    }
  }

  get(key): string {
    return this.envConfig[key];
  }
}
