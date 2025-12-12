import clsx from 'clsx';

const Card = ({ children, className, isLink, href, title, subtitle }: { children: React.ReactNode, className?: string, isLink?: boolean, href?: string, title?: string, subtitle?: string }) => {
    const baseClasses = "flex flex-col items-center justify-center rounded-xl bg-surface-1 shadow-warm overflow-hidden transition-[colors,box-shadow] duration-200 ease-in-out will-change-transform hover:shadow-warm-hover";
    const combinedClasses = clsx(baseClasses, className);

    return (
        isLink ? (
            <a
                aria-label={title}
                className={combinedClasses}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2">
                    {children}
                </div>
                <div className="flex w-full flex-col items-start justify-center px-4 pb-4 pt-2">
                    <span className='font-medium'>{title}</span>
                    <span className="font-normal text-text-sub">{subtitle}</span>
                </div>
            </a>
        ) : (
            <div
                className={combinedClasses}
            >
                <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2">
                    {children}
                </div>
                <div className="flex w-full flex-col items-start justify-center px-4 pb-4 pt-2">
                    <span className='font-medium'>{title}</span>
                    <span className="font-normal text-text-sub">{subtitle}</span>
                </div>
            </div>
        )
    );
};

export default Card;