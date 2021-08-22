import type { FC } from 'react';

import { SidebarNav } from '../molecules';

export const Sidebar: FC = () => {
    return (
        <aside className="bg-secondary-800 min-h-screen border-r border-secondary-500 flex-shrink-0 flex flex-col">
            <div className="px-6 py-6 bg-secondary-900 flex-shrink-0">
                <h1 className="text-xl text-secondary-100 font-semibold">
                    <span className="text-primary-500">FFXIV</span> Company
                    Craft
                </h1>
            </div>
            <SidebarNav />
            <div className="px-6 py-6 border-secondary-500 flex-shrink-0 border-t"></div>
        </aside>
    );
};
