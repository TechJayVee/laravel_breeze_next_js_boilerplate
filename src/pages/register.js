import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            first_name,
            last_name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
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
                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <label htmlFor="first_name">First Name</label>

                        <input
                            id="first_name"
                            type="text"
                            value={first_name}
                            onChange={event => setFname(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.first_name} />
                    </div>

                    {/* lName */}
                    <div>
                        <label htmlFor="last_name">Last Name</label>

                        <input
                            id="last_name"
                            type="text"
                            value={last_name}
                            onChange={event => setLname(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.last_name} />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
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
                            autoComplete="new-password"
                        />

                        <InputError messages={errors.password} />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="passwordConfirmation">
                            Confirm Password
                        </label>

                        <input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError messages={errors.password_confirmation} />
                    </div>

                    <div>
                        <Link href="/login">
                            <a>Already registered?</a>
                        </Link>

                        <button>Register</button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    )
}

export default Register
