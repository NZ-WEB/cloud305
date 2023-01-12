export default {
  API_BASE_URL:
    process.env.NODE_ENV === 'production'
      ? (process.env.VITE_BACK_URL as string) ?? 'https://www.cloud305.ru/api'
      : 'http://localhost/api',
};
