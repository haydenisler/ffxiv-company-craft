import Head from 'next/head';

import { Page } from '../../src/components/templates';

const Index = (): JSX.Element => {
    return (
        <>
            <Head>Free Company</Head>
            <Page title="Free Company"></Page>
        </>
    );
};

export default Index;
