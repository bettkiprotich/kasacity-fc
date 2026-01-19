import { fixtures } from "../data/fixtures";

export default function Fixtures() {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-kasacity-gold mb-12">
          Fixtures & Results
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fixtures.map((match) => (
            <div
              key={match.id}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-kasacity-gold transition"
            >
              <div className="flex justify-between mb-3">
                <span className="text-sm text-white/60">
                  {match.date}
                </span>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full
                    ${
                      match.status === "won"
                        ? "bg-green-500/20 text-green-400"
                        : match.status === "lost"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {match.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                KasaCity FC vs {match.opponent}
              </h3>

              <p className="text-sm text-white/60 mb-4">
                {match.venue}
              </p>

              {match.score && (
                <div className="text-center text-3xl font-extrabold text-kasacity-gold">
                  {match.score}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
