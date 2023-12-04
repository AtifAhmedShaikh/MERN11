/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import dotenv from "dotenv/config";
const connectionString = process.env.CONNECTION_STRING;
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
const appPath = process.env.APP_PATH;
export { connectionString, port, apiKey, tokenSecretKey, appPath };
