import RunYTD from "./_ytd-run";

export default function Main() {
	return (
		<main className='pt-10 h-full max-w-3xl mx-auto px-10 py-5 grid place-content-center'>
			<h1 className='text-4xl mb-2.5'>Ryan Dawes</h1>
			<h2
				className='text-2xl mb-2'
				style={{ color: "#C8553D" }}>
				Application Developer
			</h2>
			<ul className='*:[li]:w-fit *:[li]:ml-2 *:[li]:hover:ml-2.5 *:[li]:mb-1 text-base'>
				<h3 className='text-xl mb-1.5'>Favorites</h3>
				<li>
					<a
						href='https://github.com/dawescc/'
						title='github/me'>
						Github
					</a>
				</li>
				<li>
					<a
						href='https://www.strava.com/athletes/144880512'
						title='strava/me'>
						<RunYTD />
						KM Run
					</a>
				</li>
			</ul>
		</main>
	);
}
