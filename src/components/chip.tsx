const Chip = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className="flex cursor-pointer select-none items-center gap-1.5 will-change-[transform,background-color,color] rounded-full bg-surface-1 pr-4 pl-[14px] font-medium transition-[background-color,color,transform] duration-200 ease-out hover:bg-surface-2 active:scale-[0.97]">
            {children}
        </span>
    )
}

export default Chip;