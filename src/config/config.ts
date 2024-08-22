import 'dotenv/config';

const config = {
    APP: {
        IS_DEV: process.env.NODE_ENV === 'development',
        PORT: !!process.env.PORT ? Number(process.env.PORT) : 3000,
        ALLOWED_ORIGINGS: [...(process.env.ALLOWED_ORIGINGS ?? '').split(',')]
    }
}

export { config }