export default function HeroCard({ hero }) {
    return (
        <div className="rounded-lg shadow-md p-4 w-64 h-full flex items-center justify-center flex-col">
            <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="rounded-lg w-full h-64 object-cover"
            />
            <div className="p-4">
                <span className="text-lg font-bold text-black">{hero.name}</span>
            </div>
        </div>
    );
}