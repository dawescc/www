import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";

interface Card {
	id: number | string;
	content: React.ReactNode;
}

interface CardStackProps {
	items: Card[];
	offset?: number;
	scaleFactor?: number;
}

export const CardStack = ({ items, offset = 60, scaleFactor = 0.05 }: CardStackProps) => {
	const [cards, setCards] = useState<(Card & { _uniqueId: string })[]>(() => 
        items.map(item => ({ ...item, _uniqueId: crypto.randomUUID() }))
    );
    const [exitingCards, setExitingCards] = useState<(Card & { _uniqueId: string, _randomRotate: number })[]>([]);
    const isFirstMount = useRef(true);

	useEffect(() => {
        isFirstMount.current = false;
	}, []);

	const moveNext = () => {
		setCards((prev) => {
			const newCards = [...prev];
			const removed = newCards.shift();
			if (removed) {
                const randomRotate = Math.random() * 10 - 5;
                setExitingCards(curr => [...curr, { ...removed, _randomRotate: randomRotate }]);
           
				newCards.push({ ...removed, _uniqueId: crypto.randomUUID() });
			}
			return newCards;
		});
	};

    useEffect(() => {
        if (exitingCards.length === 0) return;
        
        const timer = setTimeout(() => {
            setExitingCards(prev => prev.slice(1));
        }, 600);

        return () => clearTimeout(timer);
    }, [exitingCards]);

	return (
		<div className='relative h-full w-full flex flex-col items-center justify-center isolate'>
			<div className='relative h-full w-full flex items-center justify-center z-10'>
                {cards.map((card, index) => {
                    if (index > 4) return null;
                    return (
                        <Card
                            key={card._uniqueId}
                            card={card}
                            index={index}
                            offset={offset}
                            scaleFactor={scaleFactor}
                            isFirstMount={isFirstMount.current}
                            total={cards.length}
                        />
                    );
                })}

                {exitingCards.map((card) => (
                    <ExitingCard 
                        key={card._uniqueId}
                        card={card}
                        rotate={card._randomRotate}
                    />
                ))}
			</div>
            
            <button 
                onClick={moveNext}
                className="absolute bottom-10 right-8 z-[100] px-6 py-3 md:px-8 md:py-4 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-black rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 md:gap-3 cursor-pointer text-sm md:text-base"
            >
                Next <span className="text-lg md:text-xl">↓</span>
            </button>
		</div>
	);
};

const Card = ({
	card,
	index,
    offset,
    scaleFactor,
    isFirstMount,
    total
}: {
	card: Card;
	index: number;
    offset: number;
    scaleFactor: number;
    isFirstMount: boolean;
    total: number;
}) => {
    // Basic transform calculation
    const targetScale = 1 - index * scaleFactor;
    const targetY = -index * offset;
    const zIndex = 50 - index;
    
    // Check if this is the "new" card at the back (index === total - 1)
    // We want it to slide up ONLY if it's not the first mount
    const isNew = !isFirstMount && index === total - 1;

	return (
		<div
			style={{
				zIndex,
                transform: `translateY(${targetY}px) scale(${targetScale})`,
                transformOrigin: "center center",
                // Transition all transform changes smoothly
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
			}}
			className={cn(
				"absolute mx-auto rounded-[32px] bg-white overflow-hidden",
                "border border-zinc-200 dark:border-white/10",
                "shadow-2xl shadow-black/10 dark:shadow-black/50",
                "dark:bg-zinc-900",
                "w-[90%] h-[90%] max-w-none origin-center",
                // On mount, if it's new, we use a keyframe animation to slide it up
                isNew && "animate-in slide-in-from-bottom-[50%] fade-in duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
			)}>
			{card.content}
		</div>
	);
};

const ExitingCard = ({ card, rotate }: { card: Card, rotate: number }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Trigger exit animation on next frame
        requestAnimationFrame(() => setMounted(true));
    }, []);

    return (
        <div
            style={{
                zIndex: 100,
                transform: mounted 
                    ? `translateY(150vh) rotate(${rotate}deg)` // Exit state
                    : `translateY(0px) scale(1)`,              // Start state (matches front card)
                filter: mounted ? "blur(3px)" : "none",
                transition: "transform 0.6s ease-in, filter 0.6s ease-in"
            }}
            className={cn(
                "absolute mx-auto rounded-[32px] bg-white overflow-hidden",
                "border border-zinc-200 dark:border-white/10",
                "shadow-2xl shadow-black/10 dark:shadow-black/50",
                "dark:bg-zinc-900",
                "w-[90%] h-[90%] max-w-none origin-center pointer-events-none"
            )}
        >
            {card.content}
        </div>
    );
};
