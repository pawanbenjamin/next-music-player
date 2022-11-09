import { useRouter } from "next/router";

type Props = {
  children: JSX.Element | JSX.Element[];
  color: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundImage: boolean;
};

export default function GradientLayout({
  children,
  color,
  image,
  subtitle,
  title,
  description,
  roundImage,
}: Props) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout");
    router.push("/signin");
  }

  return (
    <div>
      <div>
        <div>
          <img />
        </div>
        <div>
          <h4>{subtitle}</h4>
          <h4>{title}</h4>
          <h4>{description}</h4>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
      <div>{children}</div>
    </div>
  );
}
