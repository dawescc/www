import "./styles.css";
import logo from "./logo.svg";
import RunYTD from "./components/strava";
import { RiRunFill, RiGithubFill } from "react-icons/ri";

function App() {
	return (
		<main className='leading-relaxed'>
			<div className='hero'>
				<header>
					<div className='tools'>
						<a
							href='https://strava.com/'
							target='_blank'
							aria-label='strava/@me'
							rel='noreferrer'>
							<RiRunFill />
							<RunYTD />
							Km
						</a>
					</div>
				</header>
				<div className='section mt-[14em] mb-[7em]'>
					<p className='animated'>Beautiful things are everywhere.</p>
				</div>
			</div>

			<div className='section'>
				<h2>Ryan Dawes</h2>
				<div className='section-body'>
					<p>
						I'm a Senior engineer with{" "}
						<a
							target='_blank'
							href='https://sanametrix.com'>
							Sanametrix
						</a>
						. I build effective, dependable apps that are easy to use and love. I focus on the details that matter to keep things lightweight.
					</p>
				</div>
			</div>

			<div className='section'>
				<h2>Get in Touch</h2>
				<div className='section-body'>
					<p>
						While I do have a{" "}
						<a
							target='_blank'
							href='https://www.twitter.com/dawescc'>
							Twitter
						</a>{" "}
						account, the account is largely inactive. You are much more likely to reach me via <a href='mailto:hello@dawes.cc'>email</a>.
					</p>
					<p className='details'>
						Visit my{" "}
						<a
							target='_blank'
							href='https://www.github.com/dawescc'>
							<RiGithubFill className='inline mb-0.5 ml-0.5' /> Github
						</a>{" "}
						profile.
					</p>
				</div>
			</div>
		</main>
	);
}

export default App;
