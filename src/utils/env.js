const liveHost = 'https://us-central1-mealstogo-ba553.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealstogo-ba553/us-central1';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = liveHost;
