import { useRouter } from "next/router"

type Props = {
  children: JSX.Element | JSX.Element[]
  color: string
  image: string
  subtitle: string
  title: string
  description: string
  roundImage: boolean
}

export default function GradientLayout({
  children,
  color,
  image,
  subtitle,
  title,
  description,
  roundImage
}: Props) {
  const router = useRouter()

  async function logout() {
    await fetch("/api/logout")
    router.push("/signin")
  }

  return (
    <div className="bg-olive flex flex-col content-container">
      <div>
        <img
          className="w-48"
          src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_3x2.jpg"
        />
      </div>
      <div>
        <h4>{subtitle}</h4>
        <h4>{title}</h4>
        <h4>{description}</h4>
      </div>
      <button onClick={logout}>Logout</button>
      <div>{children}</div>
    </div>
  )
}
