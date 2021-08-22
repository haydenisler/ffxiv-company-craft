import Head from 'next/head';

const Index = (): JSX.Element => {
    return (
        <>
            <Head>Home</Head>
            <div className="flex bg-background-700 min-h-screen">
                <aside className="bg-background-800 min-h-screen border-r border-background-600 flex-shrink-0 py-4">
                    <div className="px-4">
                        <h1 className="text-gray-200">
                            FFXIV Company Crafting
                        </h1>
                    </div>
                    <div className="px-4"></div>
                </aside>
                <main className="min-h-screen flex-grow">
                    <header></header>
                    <div></div>
                </main>
            </div>
        </>
    );
};

export default Index;
