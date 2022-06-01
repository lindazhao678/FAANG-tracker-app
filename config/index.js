const dev = process.env.NODE_ENV !== 'production'

export const SERVER_NAME = dev ? 'http://localhost:3000' : 'https://faang-tracker-app.vercel.app'