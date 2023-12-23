import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Content from "./components/Content"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <Content user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You ar not authorized!</h1>
      )}
    </>
  )
}
