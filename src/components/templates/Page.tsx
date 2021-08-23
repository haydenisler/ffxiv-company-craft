import type { FC, ReactNode } from 'react';

import { Sidebar } from '../organisms';

type PageProps = {
    title: string;
    headerAction?: ReactNode;
    children?: ReactNode;
};

export const Page: FC<PageProps> = ({
    title,
    headerAction,
    children,
}: PageProps) => {
    return (
        <div className="flex min-h-screen bg-secondary-700">
            <Sidebar />
            <main className="flex-grow min-h-screen">
                <header className="flex items-center justify-between px-8 py-6 border-b border-secondary-500">
                    <h1 className="text-xl font-medium text-white">{title}</h1>
                    <div>{headerAction}</div>
                </header>
                <div className="px-8 py-6">{children}</div>
            </main>
        </div>
    );
};
