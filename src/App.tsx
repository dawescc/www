import "@fontsource-variable/geist";
import "@fontsource-variable/merriweather-sans/wght-italic.css";
import "./index.css";
import { RunYTD } from "./partials/_ytd-run";

export function App() {
	return (
		<div className='max-w-[1000px] mx-auto p-4 md:p-8 text-5xl font-[500] tracking-wide'>
			<main className='flex flex-col gap-8'>
				<h1 className='font-[600] text-7xl font-geist'>Hello, World</h1>
				<section
					id='content'
					className='flex flex-wrap gap-3 leading-relaxed font-merry
					[&_p]:px-6 [&_p]:py-2.5 [&_p]:bg-layer-1 [&_p]:rounded-[1.121rem]'>
					<p className='flex-1'>
						I'm <span className='selected'>Ryan</span>, a design engineer delivering high quality content products to massive audiences.
					</p>
					<div className='bg-[unset] flex-1 flex flex-col gap-3'>
						<p className='flex-1'>
							I have run over{" "}
							<span className='selected'>
								<RunYTD />
								km
							</span>{" "}
							so far this year.
						</p>

						<p className='flex-1'>
							You can find some of my personal work on{" "}
							<a
								href='https://github.com/dawescc'
								title='github/dawescc'>
								GitHub
							</a>
							.
						</p>
					</div>
					<p className='flex-auto'>
						Here are some <span className='selected'>books</span> I like right now.
						<details>
							<summary>Summer 2025</summary>
							<ul className='flex flex-col ml-18 gap-4 list-decimal text-3xl'>
								<li>
									<a href='https://www.goodreads.com/book/show/216684497-when-we-re-in-charge'>
										When We’re in charge: The Next Generation’s Guide to Leadership by Amanda Litman
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/216730681-king-dollar'>
										King Dollar: The Past and Future of the World’s Dominant Currency
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/215612594-the-measure-of-progress'>
										The Measure of Progress: Counting What Really Matters by Diane Coyle
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/210084984-how-countries-go-broke'>How Countries Go Broke: The Big Cycle</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/61613293-the-corporation-and-the-twentieth-century'>
										The Corporation in the Twentieth Century: The History of American Business Enterprise By Richard N. Langlois
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/125937631-material-world'>
										Material World: The Six Raw Materials That Shape Modern Civilization By Ed Conway
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/200449388-technology-and-the-rise-of-great-powers'>
										Technology and the Rise of Great Powers: How Diffusion Shapes Economic Competition By Jeffrey Ding
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/212898057-the-revolution-to-come'>
										The Revolution to Come: A History of an Idea from Thucydides to Lenin By Dan Edelstein
									</a>
								</li>
							</ul>
						</details>
						<details>
							<summary>Winter 2024</summary>
							<ul className='flex flex-col ml-18 gap-4 list-decimal text-3xl'>
								<li>
									<a href='https://www.goodreads.com/book/show/24945318-the-devil-s-financial-dictionary'>
										The Devil's Financial Dictionary by Jason Zweig
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/36490332-talking-to-my-daughter-about-the-economy'>
										Talking to My Daughter About the Economy by Yanis Varoufakis
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/214631090-kaput'>Kaput by Wolfgang Münchau</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/34184069-the-storm-before-the-storm'>
										The Storm Before the Storm by Mike Duncan
									</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/133240726-as-gods-among-men'>As Gods Among Men by Guido Alfani</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/31951505-the-great-leveler'>The Great Leveler by Walter Scheidel</a>
								</li>
								<li>
									<a href='https://www.goodreads.com/book/show/91360.Devil_Take_the_Hindmost'>Devil Take the Hindmost by Edward Chancellor</a>
								</li>
							</ul>
						</details>
					</p>
				</section>
			</main>
		</div>
	);
}

export default App;
