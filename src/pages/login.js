import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <div
                logo={
                    <Link href="/">
                        <a>logo here</a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus status={status} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.email} />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />

                        <InputError messages={errors.password} />
                    </div>

                    {/* Remember Me */}
                    <div>
                        <label htmlFor="remember_me">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />

                            <span>Remember me</span>
                        </label>
                    </div>

                    <div>
                        <Link href="/forgot-password">
                            <a>Forgot your password?</a>
                        </Link>

                        <button>Login</button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    )
}

export default Login
