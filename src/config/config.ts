import 'dotenv/config';

const config = {
    APP: {
        IS_DEV: process.env.NODE_ENV === 'development',
        PORT: !!process.env.PORT ? Number(process.env.PORT) : 3000,
        ALLOWED_ORIGINGS: [...(process.env.ALLOWED_ORIGINGS ?? '').split(',')]
    },
    FIREBASE: {
        API_KEY: process.env.FIREBASE_API_KEY ?? '',
        AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN ?? '',
        PROJECT_ID: process.env.FIREBASE_PROJECT_ID ?? '',
        STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET ?? '',
        MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID ?? '',
        APP_ID: process.env.FIREBASE_APP_ID ?? ''
    }
}

export { config }