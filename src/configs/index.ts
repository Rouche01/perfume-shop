const config = {
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  },
  strapiServerUrl: process.env.NEXT_PUBLIC_STRAPI_SERVER_URL,
};

export default config;
