import {
  Box,
  Flex,
  Input,
  Button,
  useToast,
  Text,
  FormControl,
} from "@chakra-ui/react";
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

    console.log(email, password);
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
    }
    setIsLoading(false);
    router.push("/");
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex direction="column" justify="center" align="center" height="100px">
        <Box w="400px">
          <form
            style={{
              marginTop: "60vw",
            }}
            onSubmit={handleSubmit}
          >
            {mode === "signup" && (
              <>
                <Input
                  placeholder="first name"
                  type="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  placeholder="last name"
                  type="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            )}
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
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
        </Box>
      </Flex>
    </Box>
  );
}
