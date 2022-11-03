import fetcher from "./fetcher";
import { Body } from "./types";

export const auth = async (mode: "signup" | "signin", body: Body) => {
  return await fetcher(`/${mode}`, body);
};
