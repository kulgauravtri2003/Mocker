/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://ai-mock_owner:DjrnB7g8WsIJ@ep-shy-breeze-a5rqaigk-pooler.us-east-2.aws.neon.tech/ai-mock?sslmode=require' ,
  }
};