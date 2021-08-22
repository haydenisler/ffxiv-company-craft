import type { FC, SyntheticEvent } from 'react';

type ButtonProps = {
    label: string;
    handleClick?: (e: SyntheticEvent) => void;
};

export const Button: FC<ButtonProps> = ({
    label,
    handleClick,
}: ButtonProps) => {
    return (
        <button
            className="text-white bg-primary-500 px-4 py-2 rounded font-medium"
            onClick={handleClick}>
            {label}
        </button>
    );
};
