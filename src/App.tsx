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
		<div className='w-full max-w-[1000px] mx-auto p-4 md:p-8 font-merry text-3xl md:text-4xl leading-10 md:leading-12'>
			<main className='flex flex-col gap-5'>
				<h1 className='font-geist text-5xl md:text-6xl font-bold'>Hello, World</h1>
				<hr className='text-layer-2' />
				<section
					id='content'
					className='flex flex-col gap-5'>
					<div className='tile'>
						<h2>
							I'm <span className='selected'>Ryan</span>, a design engineer delivering high quality content products to massive audiences.
						</h2>
					</div>
					<div className='flex flex-col sm:flex-row gap-4'>
						<div className='flex-1 tile'>
							<p>
								I have <span className='selected'>run</span> over <RunYTD />
								km so far this year.
							</p>
						</div>

						<a
							href='https://github.com/dawescc'
							title='github/dawescc'
							className='clean flex-1 tile overflow-hidden relative group'>
							<p className='relative z-1'>
								You can find some of my personal work on{" "}
								<a
									href='https://github.com/dawescc'
									title='github/dawescc'>
									GitHub
								</a>
								.
							</p>
							<div className='absolute h-auto w-full -rotate-6 right-0 bottom-0 translate-20 dark:invert opacity-5 select-none group-hover:opacity-10 transition-opacity ease-in'>
								<img src='https://cdn-icons-png.flaticon.com/256/25/25231.png' />
							</div>
						</a>
					</div>

					<div className='tile bg-transparent bg-gradient-to-b from-layer-1 to-transparent to-90% flex flex-col gap-10'>
						<p>
							Here are some <span className='selected'>books</span> I have on my list.
						</p>
					</div>

					<div className='-mx-2 grid grid-cols-1 gap-10'>
						{booksData.items.map((readList) => (
							<div
								key={readList.key}
								className='flex flex-col gap-5'>
								<p className='text-2xl text-accent'>{readList.title}</p>
								<div className='w-full flex gap-10 overflow-x-scroll snap-x snap-mandatory snap-always snap-center rounded-xl container'>
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
								</div>
							</div>
						))}
					</div>
				</section>
				<img
					src={logo}
					className='size-6 mt-10'
				/>
			</main>
		</div>
	);
}

export default App;
