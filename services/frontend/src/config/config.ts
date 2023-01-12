export default {
  API_BASE_URL:
    import.meta.env.NODE_ENV === 'production'
      ? (import.meta.env.VITE_BACK_URL as string) ??
        'https://www.cloud305.ru/api'
      : 'http://localhost/api',
};
