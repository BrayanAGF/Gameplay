import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout'
import { Home } from '../Views'

export const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/*' Component={Home} />
            </Routes>
        </Layout>
    )
}
