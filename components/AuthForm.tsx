import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "../lib/mutations";
import { Body } from "../lib/types";

type Props = {
  mode: "signin" | "signup";
};

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    const body: Body = {
      email,
      password,
    };
    if (mode === "signup") {
      body.firstName = firstName;
      body.lastName = lastName;
    }
    const user = await auth(mode, body);
    if (user.error) {
      setEmail("");
      setPassword("");
      toast({
        title: "Signin Failed!",
        description: user.error,
        status: "warning",
        isClosable: true,
      });
    } else {
      router.push("/");
    }
    setIsLoading(false);
  }

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <>
                <input
                  placeholder="first name"
                  type="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  placeholder="last name"
                  type="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )}
            <input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button>{mode}</button>
          </form>
          {mode === "signin" ? (
            <h4>
              Don't have an account? <Link href="/signup">Sign Up</Link>
            </h4>
          ) : (
            <h4>
              Already have an account? <Link href="/signin">Sign In</Link>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
