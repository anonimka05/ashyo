import axios from "axios";
import { API, API_V2 } from "./getEnv";

export const instance = () => axios.create({ baseURL: API });

export const instanceV2 = () => axios.create({ baseURL: API_V2 });
