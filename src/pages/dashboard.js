import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <AppLayout header={<h2>This is from Dashboard</h2>}>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div>welcome {user?.first_name}</div>
        </AppLayout>
    )
}

export default Dashboard
