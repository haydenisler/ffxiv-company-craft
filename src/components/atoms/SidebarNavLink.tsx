import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ComponentType, FC } from 'react';

type Icon = {
    className?: string;
};

type SidebarNavLinkProps = {
    name: string;
    href: string;
    icon: ComponentType<Icon>;
};

export const SidebarNavLink: FC<SidebarNavLinkProps> = ({
    name,
    href,
    icon: Icon,
}: SidebarNavLinkProps) => {
    const router = useRouter();

    return (
        <Link href={href}>
            <div
                className={clsx(
                    router.pathname === href && styles.div.active,
                    router.pathname !== href && styles.div.inactive,
                    styles.div.base
                )}
                role="link">
                <Icon
                    className={clsx(
                        router.pathname === href && styles.icon.active,
                        router.pathname !== href && styles.icon.inactive,
                        styles.icon.base
                    )}></Icon>
                <h2
                    className={clsx(
                        router.pathname === href && styles.h2.active,
                        router.pathname !== href && styles.h2.inactive,
                        styles.h2.base
                    )}>
                    {name}
                </h2>
            </div>
        </Link>
    );
};

const styles = {
    div: {
        base: `flex items-center space-x-2 border-2 p-2 rounded-lg group`,
        active: `border-secondary bg-secondary-700 `,
        inactive: `cursor-pointer border-transparent hover:bg-secondary-700 hover:border-pink-500`,
    },
    icon: {
        base: `w-6 h-6 stroke-current`,
        active: `text-primary-500`,
        inactive: `text-secondary-400 group-hover:text-secondary-100`,
    },
    h2: {
        base: `text-base`,
        active: `text-secondary-100 `,
        inactive: `text-secondary-300 group-hover:text-secondary-100`,
    },
};
