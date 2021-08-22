import type { FC } from 'react';

export const Sidebar: FC = () => {
    return (
        <aside className="bg-secondary-800 min-h-screen border-r border-secondary flex-shrink-0 flex flex-col">
            <div className="px-6 bg-secondary-900 py-6 flex-shrink-0">
                <h1 className="text-xl text-secondary font-semibold">
                    <span className="text-primary">FFXIV</span> Company Craft
                </h1>
            </div>
            <div className="px-6 flex-grow"></div>
            <div className="px-6 border-secondary flex-shrink-0 border-t"></div>
        </aside>
    );
};
