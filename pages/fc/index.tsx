import Head from 'next/head';

import { Button } from '../../src/components/atoms';
import { Page } from '../../src/components/templates';

const Index = (): JSX.Element => {
    return (
        <>
            <Head>Free Company</Head>
            <Page
                title="Free Company"
                headerAction={<Button label="New Crafting Project" />}></Page>
        </>
    );
};

export default Index;
