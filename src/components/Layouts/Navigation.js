import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navigation = ({ user }) => {
    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav>
            {/* Primary Navigation Menu */}
            <div>
                <div>
                    <div>
                        {/* Logo */}
                        <div>
                            <Link href="/dashboard">
                                <a>Logo</a>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <Link
                                href="/dashboard"
                                active={router.pathname === '/dashboard'}>
                                Homepage Link
                            </Link>
                        </div>
                    </div>

                    {/* Settings Dropdown */}

                    <button>
                        <div>
                            You are Log in as {user?.first_name}{' '}
                            {user?.last_name}
                        </div>
                    </button>

                    {/* Authentication */}
                    <div onClick={logout}>Logout</div>
                </div>
            </div>

            {/* Hamburger */}
            {/* <div>
                        <button onClick={() => setOpen(open => !open)}>
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"ResponsiveNavLink
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div> */}

            {/* Responsive Navigation Menu */}
            {open && (
                <div>
                    <div>
                        <div
                            href="/dashboard"
                            active={router.pathname === '/dashboard'}>
                            Dashboard
                        </div>
                    </div>

                    {/* Responsive Settings Options */}
                    <div>
                        <div>
                            <div>
                                <div>{user?.name}</div>
                                <div>{user?.email}</div>
                            </div>
                        </div>

                        <div>
                            {/* Authentication */}
                            <div onClick={logout}>Logout</div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
