import { BeakerIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/outline';
import type { FC } from 'react';

import { SidebarNavLink } from '../atoms';

const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Free Company', href: '/fc', icon: UserGroupIcon },
    { name: 'Debug', href: '/debug', icon: BeakerIcon },
];

export const SidebarNav: FC = () => {
    return (
        <>
            <h3 className="px-6 pt-6 ml-2 text-secondary-400 text-sm uppercase tracking-wide font-medium">
                Navigation
            </h3>
            <div className="px-6 py-2 flex-grow">
                <nav>
                    <ol className="space-y-2">
                        {navigation.map((nav) => {
                            return (
                                <SidebarNavLink
                                    key={nav.name}
                                    name={nav.name}
                                    href={nav.href}
                                    icon={nav.icon}
                                />
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </>
    );
};
