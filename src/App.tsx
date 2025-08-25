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
		<div className='w-full max-w-[950px] mx-auto p-4 md:p-8 font-merry'>
			<main className='flex flex-col gap-5 pt-20 text-sm'>
				<section
					id='content'
					className='flex flex-col gap-20'>
					<img
						src={logo}
						className='size-6 mb-10'
					/>

					<p className='[font-size:clamp(36px,Calc((100vw*0.05)_+_34px),150px)]'>
						I'm <span className='selected'>Ryan</span>, an application engineer.
					</p>

					<div className='grid grid-cols-1 gap-10'>
						{booksData.items.map((readList) => (
							<table
								key={readList.key}
								className='table border border-accent w-full mx-auto'>
								<thead>
									<tr>
										<th
											colSpan={2}
											className='border-b-2 border-accent py-5'>
											{readList.title}
										</th>
									</tr>
								</thead>
								<tbody className='*:[tr]:even:bg-layer-2 *:[tr]:hover:bg-highlights'>
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

				<section className='mt-10 text-accent space-y-10'>
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
				</section>
			</main>
		</div>
	);
}

export default App;
