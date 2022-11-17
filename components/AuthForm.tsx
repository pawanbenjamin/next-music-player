import { useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Link from "next/link"
import React, { useState } from "react"
import { auth } from "../lib/mutations"
import { Body } from "../lib/types"

type Props = {
  mode: "signin" | "signup"
}

export default function AuthForm({ mode }: Props) {
  const router = useRouter()
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsLoading(true)

    const body: Body = {
      email,
      password
    }
    if (mode === "signup") {
      body.firstName = firstName
      body.lastName = lastName
    }
    const user = await auth(mode, body)
    if (user.error) {
      setEmail("")
      setPassword("")
      toast({
        title: "Signin Failed!",
        description: user.error,
        status: "warning",
        isClosable: true
      })
    } else {
      router.push("/")
    }
    setIsLoading(false)
  }

  return (
    <div className="bg-olive h-screen flex justify-center items-center">
      <div className="bg-yellow flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <form onSubmit={handleSubmit} className="">
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

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {mode}
          </button>
          {mode === "signin" ? (
            <>
              <h4 className="mt-8">
                Don't have an account?
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></button>
                <Link href="/signup">Sign Up</Link>
              </h4>
            </>
          ) : (
            <h4>
              Already have an account? <Link href="/signin">Sign In</Link>
            </h4>
          )}
        </form>
      </div>
    </div>
  )
}
