import fetcher from "./fetcher";

type body = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export const auth = async (mode: "signup" | "signin", body: body) => {
  return await fetcher(`/${mode}`, body);
};
