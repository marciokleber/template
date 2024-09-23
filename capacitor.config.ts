import type { CapacitorConfig } from '@capacitor/cli';
import {CapacitorHttp} from "@capacitor/core";

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rfid',
  webDir: 'www',
  plugins:{
    CapacitorHttp:{
      enabled:true
    },
  },
  server: {
    cleartext: true,
    allowNavigation: [
      'https://dev.tre-pa.jus.br', // Adicione aqui o domínio do Keycloak ou qualquer outro permitido
    ]
  }
};

export default config;
