type body = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export default async function fetcher(url: string, data: body | undefined) {
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
