# InfoSeg Mobile

App mobile (Expo/React Native) para registro e consulta de ocorrências de segurança – CBTU BH.

## Configuração

### Variáveis de ambiente (Firebase)

Copie `.env.example` para `.env` e preencha com as credenciais do seu projeto Firebase:

- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_DATABASE_URL`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`
- `EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID`

Para produção, use sempre variáveis de ambiente; não dependa do fallback em `app.config.js`.

### Firebase Security Rules

As regras do Realtime Database e do Storage estão em `firebase/database.rules.json` e `firebase/storage.rules`. Para publicar no projeto Firebase:

```bash
firebase deploy --only database
firebase deploy --only storage
```

Requer que o projeto esteja vinculado (`firebase use` ou `firebase init`).

## Desenvolvimento

Projeto atualizado para **Expo SDK 54** (React 19, React Native 0.81, Metro bundler). Não é mais necessário `expo-cli` nem `NODE_OPTIONS=--openssl-legacy-provider`.

```bash
yarn install
npx expo install --fix
yarn start
```

- `yarn start:clear` – inicia com cache limpo (útil após mudanças em dependências).
- No primeiro `yarn install`, se aparecerem avisos de versão, rode `npx expo install --fix` para alinhar os pacotes ao SDK 54.

## Scripts

- `yarn start` – inicia o Metro/Expo (abre no dispositivo com Expo Go ou emulador)
- `yarn start:clear` – inicia com cache limpo
- `yarn android` – abre no Android
- `yarn ios` – abre no iOS
- `yarn web` – abre no navegador
