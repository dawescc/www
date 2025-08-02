interface BookDetails {
	title: string;
	authors: string[];
	bookLink: string;
	coverUrl: string | null;
}

interface BookProps {
	book: BookDetails;
}

export default function Book({ book }: BookProps) {
	return (
		<div className='w-[calc((300px)_+_.005*(100dvw_-_400px))] md:w-[calc((420px)_+_.005*(100dvw_-_400px))] h-[200px] flex-none p-5 flex gap-5 rounded-3xl bg-layer-2 hover:scale-95 transition-[scale] ease-in-out items-center relative overflow-clip'>
			{book.coverUrl && (
				<div className='absolute z-0 inset-0 w-full h-auto -translate-y-1/2 scale-200 opacity-25 blur-lg select-none'>
					<img
						src={book.coverUrl}
						alt={`Cover for ${book.title}`}
						height={162}
						width={108}
						className='aspect-auto w-full h-auto object-cover'
					/>
				</div>
			)}
			<div className='relative z-1 shrink-0 bg-layer-2 overflow-clip rounded-md'>
				{book.coverUrl && (
					<img
						src={book.coverUrl}
						alt={`Cover for ${book.title}`}
						height={162}
						width={108}
						className='aspect-auto w-full h-auto object-cover'
					/>
				)}
			</div>
			<div className='z-1 py-5 h-full flex flex-col justify-between text-2xl font-black w-full'>
				<a
					href={book.bookLink}
					title={book.title}
					className='font-geist leading-7 clean hover:underline line-clamp-3 break-before-all opacity-85 dark:opacity-90'>
					{book.title}
				</a>
				<p className='truncate text-sm text-accent text-shadow-md'>{book.authors.join(", ") || "N/A"}</p>
			</div>
		</div>
	);
}
