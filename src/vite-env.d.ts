/// <reference types="vite/client" />

declare module '*/firebase-applet-config.json' {
  const value: {
    apiKey?: string;
    authDomain?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
    firestoreDatabaseId?: string;
    [key: string]: any;
  };
  export default value;
}
