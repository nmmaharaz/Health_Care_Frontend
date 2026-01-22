const envVars = {
    jwt: {
        jwt_access_secret: process.env.JWT_ACCESS_SECRET as string,
        jwt_access_expires: process.env.JWT_ACCESS_EXPIRES as string,
    },
    api: process.env.NEXT_PUBLIC_API_URL as string,
}

export default envVars