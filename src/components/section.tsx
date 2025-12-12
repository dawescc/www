const Section = ({ children, className, marginless, id }: { children: React.ReactNode, className?: string, marginless?: boolean, id?: string }) => {
    return (
        <section className={`w-full ${marginless ? '' : 'mt-16'} ${className}`} id={id}>
            {children}
        </section>
    )
}

const SectionHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`mb-5 flex w-full items-center font-medium text-text ${className}`}> {children}</div >
    )
}

export default Section;
export { SectionHeader };