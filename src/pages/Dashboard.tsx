import { BookOpen, Clock, Code, Award, RefreshCw, Info } from 'lucide-react';

// Données Mock pour l'UI
const stats = [
  { label: 'Cours Terminés', value: '12', icon: BookOpen },
  { label: 'Heures Passées', value: '78.5', icon: Clock },
  { label: 'Exercices Finis', value: '8', icon: Code },
  { label: 'Badges Obtenus', value: '5', icon: Award },
];

const ongoingCourses = [
  {
    title: 'Introduction aux Microcontrôleurs',
    category: 'Électronique',
    progress: 75,
    time: '2h 30min',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=center',
  },
  {
    title: 'Programmation Python pour Robots',
    category: 'Programmation',
    progress: 50,
    time: '1h 05min',
    image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=150&h=150&fit=crop&crop=center',
  },
  {
    title: 'Mécanique des Systèmes Robotiques',
    category: 'Mécanique',
    progress: 75,
    time: '3h 42min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop&crop=center',
  },
];

const badges = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center', count: 2 },
  { id: 2, image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=80&h=80&fit=crop&crop=center', count: 1 },
  { id: 3, image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=80&h=80&fit=crop&crop=center', count: 7 },
  { id: 4, image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=80&h=80&fit=crop&crop=center', count: 2 },
  { id: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center', count: 1 },
  { id: 6, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center', count: 4 },
  { id: 7, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center', count: 1 },
  { id: 8, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&crop=center', count: 7 },
  { id: 9, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop&crop=center', count: 1 },
  { id: 10, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=80&h=80&fit=crop&crop=center', count: 4 },
];

const competitions = [
  { title: 'Simulation de Robot Mobile', time: 'Dans 2 jours' },
  { title: 'Contrôle PID', time: 'Dans 5 jours' },
];

export const Dashboard = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] ml-64">
      <div className="w-full max-w-none p-6 sm:p-8 lg:p-12">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#25346f] leading-tight">
            Bonjour, <span className="text-[#5C5CBD]">apprenti Tom</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-2">Continuez votre progression en robotique</p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm flex items-center justify-between h-20 sm:h-24 lg:h-28 w-full">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#25346f]">{stat.value}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* Ongoing Courses */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm w-full">
              <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#25346f]">Cours en Cours</h2>
                <a href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#5C5CBD]">Voir tous</a>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {ongoingCourses.map((course, index) => (
                  <div key={index} className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-lg hover:bg-gray-50">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg object-cover flex-shrink-0 border-2 border-gray-100"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop&crop=center';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#25346f] text-base sm:text-lg lg:text-xl mb-1">{course.title}</p>
                      <p className="text-sm sm:text-base text-gray-500 mb-2">{course.category}</p>
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3 mr-4">
                          <div className="bg-amber-400 h-2 sm:h-3 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <span className="text-sm sm:text-base text-gray-500 font-semibold">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm text-gray-400 mb-2"><Clock className="inline w-4 h-4 mr-1"/>{course.time}</p>
                      <button className="bg-[#5C5CBD] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90">Continuer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Badges */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm w-full">
              <div className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#25346f]">Derniers Badges</h2>
                <RefreshCw className="w-6 h-6 text-gray-400 cursor-pointer hover:text-[#5C5CBD]" />
              </div>
              <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-5 w-full">
                {badges.slice(0, 10).map((badge) => (
                  <div key={badge.id} className="relative aspect-square w-full">
                    <img
                      src={badge.image}
                      alt={`Badge ${badge.id}`}
                      className="w-full h-full object-cover rounded-lg border-2 border-gray-100"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 bg-white text-sm text-[#25346f] rounded-full px-1.5 py-0.5 border border-gray-200 font-semibold min-w-[20px] text-center">{badge.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Competition */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm w-full">
              <div className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#25346f]">Compétition à Venir</h2>
                <a href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#5C5CBD]">Voir tous</a>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {competitions.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="w-1.5 h-8 sm:h-10 lg:h-12 bg-amber-400 rounded-full mr-4 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#25346f] text-base sm:text-lg truncate">{comp.title}</p>
                        <p className="text-sm sm:text-base text-gray-500 truncate">{comp.time}</p>
                      </div>
                    </div>
                    <button className="bg-[#5C5CBD] text-white p-2 sm:p-3 rounded-lg hover:bg-opacity-90 flex-shrink-0">
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
