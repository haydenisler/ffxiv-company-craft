import type { FC, ReactNode } from 'react';

import { Sidebar } from '../organisms';

type PageProps = {
    title: string;
    headerAction?: ReactNode;
    children?: ReactNode;
};

export const Page: FC<PageProps> = ({ title, children }: PageProps) => {
    return (
        <div className="flex bg-secondary-700 min-h-screen">
            <Sidebar />
            <main className="min-h-screen flex-grow">
                <header className="px-8 py-6 border-b border-secondary-500">
                    <h1 className="text-xl text-white font-medium">{title}</h1>
                </header>
                <div className="px-8 py-6">{children}</div>
            </main>
        </div>
    );
};
