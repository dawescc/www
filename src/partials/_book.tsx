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
		<div className='w-[75%] md:w-[450px] h-[200px] flex-none p-5 flex gap-5 rounded-3xl bg-layer-2 hover:scale-95 transition-[scale] ease-in-out items-center'>
			<div className='shrink-0 bg-layer-2 w-[108px] h-[162px] overflow-clip rounded-md'>
				{book.coverUrl && (
					<img
						src={book.coverUrl}
						alt={`Cover for ${book.title}`}
						className='w-full h-full object-cover'
					/>
				)}
			</div>
			<div className='py-5 h-full flex flex-col justify-between text-2xl font-bold'>
				<a
					href={book.bookLink}
					className='font-serif leading-7 clean hover:underline line-clamp-3'>
					{book.title}
				</a>
				<p className='truncate text-sm text-accent'>{book.authors.join(", ") || "N/A"}</p>
			</div>
		</div>
	);
}
