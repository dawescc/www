import "@fontsource-variable/geist";
import "./index.css";

export function App() {
	return (
		<div className='max-w-[1200px] mx-auto p-8 text-5xl font-[600] tracking-wide'>
			<main className='flex flex-col gap-8'>
				<h1 className='font-[600] text-7xl selected'>Hello, World</h1>
				<section
					id='content'
					className='flex flex-col-gap-4 leading-relaxed font-sans'>
					<p>
						Ryan Dawes <USA /> is a design engineer delivering high quality content products to massive audiences.
					</p>
				</section>
			</main>
		</div>
	);
}

const USA = () => {
	return (
		<div className='inline-flex items-center'>
			<div className='w-[1.5ch] overflow-clip rounded'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg'
					alt='Flag of the United States'
					className='w-full h-full object-cover'
				/>
			</div>
		</div>
	);
};

export default App;
