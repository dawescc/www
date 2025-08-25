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
		<tr
			id={book.title
				.toLowerCase()
				.trim()
				.replace(/[^\w\s-]/g, "")
				.replace(/[\s_-]+/g, "-")
				.replace(/^-+|-+$/g, "")}
			className='*:[td]:p-2 align-middle'>
			<td>
				<a
					href={book.bookLink || "#"}
					title={book.title || "N/a"}
					className='clean group grid grid-cols-1 md:grid-cols-2'>
					<p className='font-bold underline group-hover:no-underline'>{book.title || "N/a"}</p>
					<p className='text-accent md:hidden'>{book.authors.join(", ") || "N/a"}</p>
				</a>
			</td>
			<td>
				<p className='text-accent hidden md:block'>{book.authors.join(", ") || "N/a"}</p>
			</td>
		</tr>
	);
}
