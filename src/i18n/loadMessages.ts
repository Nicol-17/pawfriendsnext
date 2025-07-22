import { locales } from "./routing";


export const loadMessages = async (locale: string) => {
  const messages = {
    chat: (await import(`@/../messages/${locale}/chat.json`)).default,
    dashboard: (await import(`@/../messages/${locale}/dashboard.json`)).default,
    home: (await import(`@/../messages/${locale}/home.json`)).default,
    login: (await import(`@/../messages/${locale}/login.json`)).default,
    signup: (await import(`@/../messages/${locale}/signup.json`)).default,
  };

  return messages;
};