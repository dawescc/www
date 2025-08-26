import "@fontsource-variable/geist";
import "@fontsource-variable/merriweather-sans/wght-italic.css";
import "@fontsource-variable/literata/wght-italic.css";
import "./index.css";
import RunYTD from "./partials/_ytd-run";
import Book from "./partials/_book";
import booksData from "./../books.json";
import logo from "./logo.svg";

export function App() {
	return (
		<div className='w-full max-w-[950px] mx-auto font-merry'>
			<main className='flex flex-col text-sm px-4 lg:px-0'>
				<section className='flex flex-col h-dvh justify-between'>
					<div className='text-accent flex items-center justify-between px-4 md:px-0 pt-20'>
						<img
							src={logo}
							className='size-6'
						/>
						<p className=''>
							<a
								className='clean underline hover:no-underline'
								href='https://github.com/dawescc'>
								GitHub
							</a>
						</p>
						<a
							href='https://www.strava.com/athletes/144880512'
							title='strava/me'
							className='clean underline hover:no-underline'>
							<img
								height={100}
								width={100}
								src='https://www.svgrepo.com/show/189239/running-run.svg'
								className='size-[1em] inline mb-1 mr-2'
								aria-hidden
							/>
							<RunYTD />
							km
						</a>
					</div>
					<div className='flex flex-col justify-between gap-20 pb-20'>
						<p className='[font-size:clamp(36px,Calc((100vw*0.05)_+_34px),150px)]'>
							I'm <span className='selected'>Ryan</span>, an application engineer.
						</p>
					</div>
				</section>

				<section className='flex flex-col gap-20 pb-20'>
					<div className='grid grid-cols-1 gap-10'>
						{booksData.items.map((readList) => (
							<table
								key={readList.key}
								className='table w-full mx-auto'>
								<thead className='bg-highlights text-black'>
									<tr>
										<th
											colSpan={2}
											className='border-b-2 py-5'>
											{readList.title}
										</th>
									</tr>
								</thead>
								<tbody className='*:[tr]:even:bg-layer-2 *:[tr]:hover:bg-highlights-2 *:[tr]:hover:text-black'>
									{readList.entries.map((bookEntry) => (
										<Book
											key={bookEntry.title}
											book={{
												title: bookEntry.title,
												authors: bookEntry.authors.map((a) => a.name),
												bookLink: bookEntry.url,
												coverUrl: bookEntry.cover,
											}}
										/>
									))}
								</tbody>
							</table>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
