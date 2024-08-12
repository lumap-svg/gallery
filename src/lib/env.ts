import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PEXEL_API_KEY: str(),
});
export default env;
