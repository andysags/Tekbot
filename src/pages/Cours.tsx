import React from 'react';
import { Clock, Star, Play, Search, SlidersHorizontal, ChevronDown, BookOpen, Circle, CheckCircle2 } from 'lucide-react';

export const Courses = (): JSX.Element => {
  const courses = [
    {
      id: 1,
      title: 'Initiation au HTML',
      subtitle: 'Bases du web en 2 heures',
      description: 'Apprenez les fondamentaux du HTML pour créer vos premières pages web.',
      status: 'Nouveau',
      progress: 45,
      duration: '2h',
      lessons: 8,
      level: 'Débutant',
      action: 'Continuer'
    },
    {
      id: 2,
      title: 'CSS Avancé',
      subtitle: 'Maîtrisez les animations',
      description: 'Créez des interfaces modernes avec CSS Grid, Flexbox et animations.',
      status: null,
      progress: 0,
      duration: '4h',
      lessons: 12,
      level: 'Avancé',
      action: 'Commencer'
    },
    {
      id: 3,
      title: 'Design System',
      subtitle: 'Cohérence visuelle',
      description: 'Construisez un système de design complet pour vos projets.',
      status: 'Terminé',
      progress: 100,
      duration: '3h',
      lessons: 10,
      level: 'Intermédiaire',
      action: 'Continuer'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-emerald-100 text-emerald-800';
      case 'Intermédiaire': return 'bg-amber-100 text-amber-800';
      case 'Avancé': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = (status: string | null) => {
    if (!status) return '';
    if (status === 'Nouveau') return 'bg-fuchsia-100 text-fuchsia-700';
    if (status === 'Terminé') return 'bg-emerald-100 text-emerald-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-neutral-50 ml-64">
      <div className="max-w-7xl mx-auto px-4 pb-10">
        {/* Header */}
        <br />
        <br />
        <h1 className="font-['Inter'] font-bold text-3xl text-[#25346f] mb-4">Modules</h1>
        <br />
        {/* Search and Filters Container */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 " />
            <input
              type="text"
              placeholder='Rechercher un module, ex : "HTML", "Design"...'
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-blue-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300 text-gray-700 placeholder:text-gray-500 font-['Inter']"
            />
          </div>

          {/* Filters row */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[#C084FC]">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-['Inter'] font-semibold text-sm">Filtres</span>
            </div>

            {/* Level filters */}
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg text-sm font-['Inter'] font-semibold bg-[#C084FC] text-white">Tous</button>
              <button className="px-4 py-2 rounded-lg text-sm font-['Inter'] font-semibold bg-white border border-gray-200 text-[#C084FC] hover:bg-gray-50">Débutant</button>
              <button className="px-4 py-2 rounded-lg text-sm font-['Inter'] font-semibold bg-white border border-gray-200 text-[#C084FC] hover:bg-gray-50">Intermédiaire</button>
              <button className="px-4 py-2 rounded-lg text-sm font-['Inter'] font-semibold bg-white border border-gray-200 text-[#C084FC] hover:bg-gray-50">Avancé</button>
            </div>

            {/* Extra filters */}
            <div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-['Inter'] font-semibold bg-white border border-gray-200 text-[#C084FC] hover:bg-gray-50">
               { 'Durée < 2h'  }
              </button>
            </div>

            {/* Category select */}
            <div className="w-full">
              <label className="block text-sm font-['Inter'] font-semibold text-gray-600 mb-2">Catégorie</label>
              <div className="relative">
                <select className="w-full appearance-none bg-amber-400 text-[#25346f] font-['Inter'] font-semibold px-4 py-3 pr-10 rounded-lg shadow-sm focus:outline-none border border-amber-500">
                  <option>Tous</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#25346f]" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 relative">
                {/* Favorite icon */}
                <button className="absolute right-4 top-4 text-gray-300 hover:text-violet-500">
                  <Star className="w-5 h-5" />
                </button>

                {/* Status badge */}
                {course.status && (
                  <span className={`inline-block text-xs font-['Inter'] font-semibold px-3 py-1 rounded-full ${
                    course.status === 'Nouveau' ? 'bg-fuchsia-100 text-fuchsia-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {course.status}
                  </span>
                )}

                {/* Title */}
                <h3 className="mt-3 text-xl font-['Inter'] font-bold text-[#5C5CBD]">{course.title}</h3>
                <p className="text-[#8EA8D4] font-['Inter'] font-medium">{course.subtitle}</p>

                {/* Description */}
                <p className="mt-3 text-sm font-['Inter'] text-gray-600 leading-relaxed">
                  {course.description}
                </p>

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm font-['Inter'] text-gray-600 mb-2">
                    <span>Progression</span>
                    <span className="text-violet-700 font-semibold">{course.progress}% complété</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 rounded-full" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-['Inter'] text-gray-600">
                  <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> Durée : {course.duration}</span>
                  <span className="inline-flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.lessons} leçons</span>
                  <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Débutant' ? 'bg-emerald-100 text-emerald-800' :
                    course.level === 'Intermédiaire' ? 'bg-amber-100 text-amber-800' :
                    'bg-rose-100 text-rose-800'
                  }`}>
                    Niveau : {course.level}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 text-white px-4 py-3 rounded-lg font-['Inter'] font-semibold hover:bg-violet-700 transition-colors">
                    {course.progress === 100 ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    {course.action}
                  </button>
                  <button className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-gray-200 text-violet-600 hover:bg-violet-50">
                    <Circle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};