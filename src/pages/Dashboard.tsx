import React from 'react';
import { BookOpen, Clock, Code, Award, ChevronRight, RefreshCw, Info } from 'lucide-react';

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
    image: '/images/microcontroller.png',
  },
  {
    title: 'Programmation Python pour Robots',
    category: 'Programmation',
    progress: 50,
    time: '1h 05min',
    image: '/images/python-robot.png',
  },
  {
    title: 'Mécanique des Systèmes Robotiques',
    category: 'Mécanique',
    progress: 75,
    time: '3h 42min',
    image: '/images/robotic-systems.png',
  },
];

const badges = [
  { id: 1, image: '/images/badge1.png', count: 2 },
  { id: 2, image: '/images/badge2.png', count: 1 },
  { id: 3, image: '/images/badge3.png', count: 7 },
  { id: 4, image: '/images/badge4.png', count: 2 },
  { id: 5, image: '/images/badge5.png', count: 1 },
  { id: 6, image: '/images/badge6.png', count: 4 },
  { id: 7, image: '/images/badge7.png', count: 1 },
  { id: 8, image: '/images/badge8.png', count: 7 },
  { id: 9, image: '/images/badge9.png', count: 1 },
  { id: 10, image: '/images/badge10.png', count: 4 },
];

const competitions = [
  { title: 'Simulation de Robot Mobile', time: 'Dans 2 jours' },
  { title: 'Contrôle PID', time: 'Dans 5 jours' },
];

export const Dashboard = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] ml-64 p-8 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#25346f]">
            Bonjour, <span className="text-[#5C5CBD]">apprenti Tom</span>
          </h1>
          <p className="text-gray-500 mt-1">Continuez votre progression en robotique</p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#25346f]">{stat.value}</p>
                  </div>
                  <stat.icon className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>

            {/* Ongoing Courses */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#25346f]">Cours en Cours</h2>
                <a href="#" className="text-sm text-gray-500 hover:text-[#5C5CBD]">Voir tous</a>
              </div>
              <div className="space-y-4">
                {ongoingCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50">
                    <img src={course.image} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-semibold text-[#25346f]">{course.title}</p>
                      <p className="text-sm text-gray-500">{course.category}</p>
                      <div className="flex items-center mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                          <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-400 mb-2 flex items-center"><Clock size={12} className="mr-1"/>{course.time}</p>
                        <button className="bg-[#5C5CBD] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90">Continuer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#25346f]">Derniers Badges</h2>
                <RefreshCw className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#5C5CBD]" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {badges.slice(0, 10).map((badge) => (
                  <div key={badge.id} className="relative">
                    <img src={badge.image} alt={`Badge ${badge.id}`} className="w-full h-auto rounded-lg" />
                    <span className="absolute -bottom-1 -right-1 bg-white text-xs text-[#25346f] rounded-full px-1.5 py-0.5 border border-gray-200 font-semibold">{badge.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Competition */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#25346f]">Compétition à Venir</h2>
                <a href="#" className="text-sm text-gray-500 hover:text-[#5C5CBD]">Voir tous</a>
              </div>
              <div className="space-y-4">
                {competitions.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-1 h-8 bg-amber-400 rounded-full mr-3"></div>
                        <div>
                            <p className="font-semibold text-[#25346f]">{comp.title}</p>
                            <p className="text-sm text-gray-500">{comp.time}</p>
                        </div>
                    </div>
                    <button className="bg-[#5C5CBD] text-white p-2 rounded-lg hover:bg-opacity-90">
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
