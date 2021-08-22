import Head from 'next/head';

import { Sidebar } from '../src/components/organisms';

const Index = (): JSX.Element => {
    return (
        <>
            <Head>Home</Head>
            <div className="flex bg-secondary-700 min-h-screen">
                <Sidebar />
                <main className="min-h-screen flex-grow">
                    <header className="py-6 border-b border-secondary"></header>
                    <div></div>
                </main>
            </div>
        </>
    );
};

export default Index;
