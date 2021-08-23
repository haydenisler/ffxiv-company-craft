import axios from 'axios';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import { Page } from '../src/components/templates';

const Index = (): JSX.Element => {
    const [data, setData] = useState<unknown>();

    const fetcher = useCallback(async () => {
        await axios({
            method: 'GET',
            url: '/api',
        });

        const results = await axios({
            method: 'GET',
            baseURL: 'https://xivapi.com',
            url: '/item/5378',
            params: {
                private_key: process.env.NEXT_PUBLIC_XIVAPI_KEY ?? '',
            },
        });

        setData(results);
    }, []);

    useEffect(() => {
        fetcher();
    }, [fetcher]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <Head>Home</Head>
            <Page title="Home">
                <h1>Hello world!</h1>
            </Page>
        </>
    );
};

export default Index;
