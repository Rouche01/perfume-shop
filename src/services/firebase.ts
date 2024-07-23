import config from "@/configs";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const app = initializeApp(config.firebase);
const auth = getAuth(app);

export default auth;
