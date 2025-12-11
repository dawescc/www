import { useState, useEffect, createContext, useContext } from "react";
import "@fontsource-variable/geist";
import "@fontsource-variable/merriweather-sans/wght-italic.css";
import "@fontsource-variable/literata/wght-italic.css";
import "./index.css";
import { CardStack } from "./components/CardStack";
import { Github, Activity, Terminal } from "lucide-react";

export const RunContext = createContext<string>("hmmm");

const RunDataDisplay = () => {
    const distance = useContext(RunContext);
    return <>{distance}</>;
};

export function App() {
    const [runDistance, setRunDistance] = useState<string>("hmmm");

    useEffect(() => {
        async function fetchDistance() {
            try {
                const res = await fetch("/api/running/ytd-total");
                if (!res.ok) throw new Error(`Error: ${res.status}`);

                const data = await res.json();
                const distanceMeters = data.distance;
                
                if (typeof distanceMeters === "number") {
                    setRunDistance((distanceMeters / 1000).toFixed(2));
                } else {
                     setRunDistance("???.??");
                }
            } catch (err) {
                console.error(err);
                setRunDistance("???.??");
            }
        }
        fetchDistance();
    }, []);

	const items = [
		{
			id: 1,
			content: (
				<div className="flex flex-col items-center justify-center h-full w-full text-center p-8 bg-zinc-50 dark:bg-zinc-900">
                    <div className="flex-1 flex flex-col justify-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-black shadow-sm flex items-center justify-center mx-auto ring-1 ring-zinc-900/5 dark:ring-white/10">
                            <Terminal className="w-8 h-8 text-zinc-900 dark:text-zinc-100" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-2">
                            <h1 className='text-4xl font-black font-merry text-zinc-900 dark:text-white tracking-tight mb-2'>
                                Ryan Dawes
                            </h1>
                            <p className='text-lg text-zinc-500 dark:text-zinc-400 font-medium font-geist'>
                                Application Developer
                            </p>
                            <a
                            href='https://github.com/dawescc/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-full py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-zinc-200 transition-colors'>
                            View Github
                            </a>
                        </div>
                    </div>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className="flex flex-col h-full w-full p-8 bg-orange-50 dark:bg-zinc-900 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex justify-between items-start z-10">
                         <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center">
                            <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center z-10">
                        <div className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 mb-2">
                            YTD Running Distance
                        </div>
                        <div className="flex items-baseline gap-2">
                             <span className="font-black text-6xl text-zinc-900 dark:text-white font-merry tracking-tighter">
						        <RunDataDisplay />
                            </span>
                            <span className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">km</span>
                        </div>
					</div>

                     <a
						href='https://www.strava.com/athletes/144880512'
						target='_blank'
						rel='noopener noreferrer'
						className='z-10 flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:opacity-70 transition-opacity'>
						View on Strava <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			),
		},
	];

	return (
        <RunContext.Provider value={runDistance}>
            <main className='relative h-dvh w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 font-merry selection:bg-zinc-200 dark:selection:bg-zinc-800'>
                
                <div className="relative z-10 w-full h-full">
                    <CardStack items={items} />
                </div>
                
                <footer className="absolute bottom-6 left-0 right-0 text-center text-zinc-400 text-sm pointer-events-none z-0">
                    Ryan Dawes &copy; {new Date().getFullYear()}
                </footer>
            </main>
        </RunContext.Provider>
	);
}

export default App;
