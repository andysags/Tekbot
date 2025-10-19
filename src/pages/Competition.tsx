import { Link } from 'react-router-dom';

const RankingRow = ({ rank, name, score, status }: { rank: number; name: string; score: number; status?: string }) => {
	// couleur du petit point selon le rang (exemple)
	const dotColors = ['bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-purple-200', 'bg-pink-200', 'bg-orange-200'];
	const dotColor = dotColors[Math.max(0, Math.min(5, rank - 1))];

	const badgeClass = (s?: string) => {
		if (!s) return 'bg-gray-100 text-gray-700';
		if (s.toLowerCase().includes('top')) return 'bg-green-100 text-green-700';
		if (s.toLowerCase().includes('en cours')) return 'bg-blue-50 text-blue-700';
		return 'bg-gray-100 text-gray-700';
	};

	return (
		<div className="grid grid-cols-12 items-center py-3 border-b border-gray-100">
			<div className="col-span-1 text-sm text-gray-400">{rank}</div>
			<div className="col-span-7 text-sm text-[#1f2937] flex items-center gap-3">
				<span className={`w-3 h-3 rounded-full ${dotColor} inline-block`} />
				<a className="text-sm text-[#2d9bf0] hover:underline" href="#">{name}</a>
			</div>
			<div className="col-span-2 text-sm text-gray-500 text-right">{score}</div>
			<div className="col-span-2 text-right">
				{status ? (
					<span className={`inline-block text-xs px-3 py-1 rounded-full ${badgeClass(status)}`}>
						{status}
					</span>
				) : null}
			</div>
		</div>
	);
};

const CompetitionCard = ({
	title,
	date,
	description,
	buttonLabel = 'Voir les règles',
	participants = 0,
	icon = 'calendar',
}: {
	title: string;
	date: string;
	description: string;
	buttonLabel?: string;
	participants?: number;
	icon?: 'calendar' | 'clock' | 'event';
}) => {
	const Icon = () => {
		if (icon === 'clock') {
			return (
				<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 font-bold border border-blue-100 text-lg">⏱️</div>
			);
		}
		// calendar/event default
		return (
			<div className="w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 font-bold border border-blue-100 text-lg">🗓️</div>
		);
	};

	return (
		<div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
			<div className="flex items-start gap-4">
				<Icon />
				<div className="flex-1">
					<h4 className="text-sm font-semibold text-[#25346f]">{title}</h4>
					<p className="text-xs text-gray-500 mt-1">{description}</p>
				</div>
			</div>

			<div className="mt-4 flex items-center justify-between text-xs text-gray-500">
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
						<span>{date}</span>
					</div>
					<div className="flex items-center gap-2">
						<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"></path></svg>
						<span>{participants} Participants</span>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<Link to="/competitions/1" className="block w-full text-center bg-[#2d9bf0] hover:bg-[#1f86d6] text-white px-4 py-2 rounded-md font-semibold">{buttonLabel}</Link>
			</div>
		</div>
	);
};

const Competition = (): JSX.Element => {
	const rankings = [
		{ rank: 1, name: 'Alice Dupont', score: 1250, status: 'Top Player' },
		{ rank: 2, name: 'Bob Martin', score: 1180, status: 'Top Player' },
		{ rank: 3, name: 'Clara Leblanc', score: 1020, status: 'Participant Actif' },
		{ rank: 4, name: 'David Dubois', score: 950, status: 'Participant Actif' },
		{ rank: 5, name: 'Émile Garnier', score: 880, status: 'Nouvel arrivant' },
		{ rank: 6, name: 'François Petit', score: 810, status: 'Participant Actif' }
	];

	return (
		<div className="min-h-screen bg-neutral-50">
			<div className="pl-[260px]">{/* espace pour la navigation fixe */}
				<div className="max-w-6xl mx-auto py-12 px-6">
					<h1 className="text-2xl font-extrabold text-[#25346f] mb-8">Classement Général des Robots</h1>

					<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
						<div className="p-6">
							{/* Full width Ranking header */}
							<div className="flex items-center font-medium text-gray-500 border-b border-gray-100 pb-2">
								<div className="w-12 text-sm">Rang</div>
								<div className="flex-1 text-sm">Participant</div>
								<div className="w-28 text-sm text-right">Score</div>
								<div className="w-36 text-sm text-right">Statut</div>
							</div>

							<div>
								{rankings.map((r) => (
									<RankingRow key={r.rank} rank={r.rank} name={r.name} score={r.score} status={r.status} />
								))}
							</div>
						</div>
					</div>


					{/* Competitions Active & Futures */}
					<div className="mt-12">
						<h2 className="text-xl font-extrabold text-[#25346f] mb-6">Competitions Actives & Futures</h2>

									<div className="grid md:grid-cols-3 gap-6">
														<CompetitionCard
															title="Robot Sumo: Grand Défi"
															date="Fin le 30 Juin 2024"
															description="Construisez et programmez un robot autonome pour pousser son adversaire hors du ring. Préparez-vous à des affrontements équipes !"
															participants={125}
															buttonLabel="Voir les règles"
															icon="clock"
														/>

														<CompetitionCard
															title="Suiveur de Ligne : Circuit Pro"
															date="Débute le 15 Juillet 2024"
															description="Optimisez votre robot pour suivre une ligne plus rapidement possible sur un parcours complexe. La vitesse est clé !"
															participants={80}
															buttonLabel="S'inscrire"
															icon="event"
														/>

														<CompetitionCard
															title="Défi Drone Autonome"
															date="Débute le 1er Août 2024"
															description="Programmez un drone pour naviguer et accomplir des tâches dans un labyrinthe 3D. Le futur du vol autonome vous attend."
															participants={60}
															buttonLabel="S'inscrire"
															icon="event"
														/>

														{/* Hackathon: aligné sous la première colonne */}
														<div className="md:col-span-1">
															<CompetitionCard
																title="Hackathon Robotique d'Innovation"
																date="Débute le 1er Septembre 2024"
																description="Proposez et développez un projet robotique innovant pour résoudre un problème du monde réel. L'originalité est primordiale."
																participants={45}
																buttonLabel="Proposer un projet"
																icon="calendar"
															/>
														</div>
									</div>
					</div>
				</div>
			</div>
		</div>
		);
	};

	export default Competition;

