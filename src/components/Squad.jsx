import { squad } from "../data/squad";

export default function Squad() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-kasacity-gold mb-12">
          First Team Squad
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {squad.map((player) => (
            <div
              key={player.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-kasacity-gold transition"
            >
              <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-gradient-to-br from-kasacity-sunset to-kasacity-gold flex items-center justify-center text-3xl font-extrabold text-black">
                {player.number}
              </div>

              <h3 className="text-lg font-bold text-white">
                {player.name}
              </h3>

              <p className="text-sm text-white/60">
                {player.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
