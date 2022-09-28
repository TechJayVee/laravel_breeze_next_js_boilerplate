import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div>
                <div c>
                    {user ? (
                        <Link href="/dashboard">
                            <a>Dashboard</a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <a>Login</a>
                            </Link>

                            <Link href="/register">
                                <a>Register</a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
