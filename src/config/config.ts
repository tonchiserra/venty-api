import 'dotenv/config';

const config = {
    APP: {
        IS_DEV: process.env.NODE_ENV === 'development',
        PORT: !!process.env.PORT ? Number(process.env.PORT) : 3000,
        ALLOWED_ORIGINGS: [...(process.env.ALLOWED_ORIGINGS ?? '').split(',')]
    },
    AWS: {
        REGION: "us-east-1",
        AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY ?? '',
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? ''
    }
}

export { config }