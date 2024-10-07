import HeroCard from "./HeroCard";

export default function HeroList({ heroes }) {
    return (
        <div className="grid gap-0 w-full items-center justify-center grid-flow-col-dense">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} hero={hero}/>
            ))}
        </div>
    );
}