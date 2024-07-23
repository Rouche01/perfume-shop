import config from "@/configs";
import axios from "axios";

export const client = axios.create({
  baseURL: `${config.strapiServerUrl}/api`,
});
