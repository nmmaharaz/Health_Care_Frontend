const envVars = {
    jwt: {
        jwt_access_secret: process.env.JWT_ACCESS_SECRET as string,
        jwt_access_expires: process.env.JWT_ACCESS_EXPIRES as string,
        jwt_reset_pass_secret: process.env.RESET_PASS_SECRET as string
    },
    api: process.env.NEXT_PUBLIC_API_URL as string,
    node_env: process.env.NODE_ENV as string
}

export default envVars