import Head from 'next/head';

import { Page } from '../src/components/templates';

const Index = (): JSX.Element => {
    return (
        <>
            <Head>Home</Head>
            <Page title="Home"></Page>
        </>
    );
};

export default Index;
