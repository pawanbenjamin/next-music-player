import { Body } from "../lib/types";

export default async function fetcher(url: string, data: Body | undefined) {
  console.log("URLLL IN FETCHER", url);
  console.log("BODDDYYY  DATA", data);
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
