'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Content from '../components/Content'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <Content user={session?.user} pagetype={"Client"}/>
            <p className="text-x text-center">This is a client component that is authorized using NextJS Session (in client).</p>
        </section>
    )
}
