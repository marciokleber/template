import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rfid',
  webDir: 'www',

  server: {
    url: 'http://localhost:8100',
    cleartext: true,
    allowNavigation: [
      'https://dev.tre-pa.jus.br', // Adicione aqui o domínio do Keycloak ou qualquer outro permitido
    ]
  }
};

export default config;
