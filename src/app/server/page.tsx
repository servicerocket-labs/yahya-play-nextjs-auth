import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Content from "../components/Content"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <section className="flex flex-col gap-6">
            <Content user={session?.user} pagetype={"Server"}/>
            <p className="text-x text-center">This page is authorized using NextJS Session.</p>
            <p className="text-x text-center">If the session is invalid, you will be redirected to singin page.</p>
        </section>
    )

}
