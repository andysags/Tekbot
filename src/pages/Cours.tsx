import React from 'react';
import { Clock, Users, Star, Play } from 'lucide-react';

export const Courses = (): JSX.Element => {
  const courses = [
    {
      id: 1,
      title: "Introduction à la Robotique",
      description: "Découvrez les bases de la robotique et construisez votre premier robot.",
      duration: "8 heures",
      students: 245,
      rating: 4.8,
      level: "Débutant",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Gratuit"
    },
    {
      id: 2,
      title: "Programmation Arduino",
      description: "Maîtrisez la programmation des microcontrôleurs Arduino pour vos projets.",
      duration: "12 heures",
      students: 189,
      rating: 4.9,
      level: "Intermédiaire",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "49€"
    },
    {
      id: 3,
      title: "Intelligence Artificielle et Robotique",
      description: "Intégrez l'IA dans vos robots pour des comportements intelligents.",
      duration: "16 heures",
      students: 156,
      rating: 4.7,
      level: "Avancé",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "99€"
    },
    {
      id: 4,
      title: "Robotique Mobile",
      description: "Construisez des robots autonomes capables de se déplacer et naviguer.",
      duration: "14 heures",
      students: 203,
      rating: 4.6,
      level: "Intermédiaire",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "79€"
    },
    {
      id: 5,
      title: "Capteurs et Actionneurs",
      description: "Apprenez à utiliser différents capteurs et actionneurs dans vos projets.",
      duration: "10 heures",
      students: 167,
      rating: 4.8,
      level: "Intermédiaire",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "59€"
    },
    {
      id: 6,
      title: "Projet Final : Robot Complet",
      description: "Mettez en pratique toutes vos connaissances dans un projet complet.",
      duration: "20 heures",
      students: 89,
      rating: 4.9,
      level: "Avancé",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "149€"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-8 ml-64">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-['Outfit'] font-extrabold text-4xl md:text-5xl mb-4">
            <span className="text-[#25346f]">Nos </span>
            <span className="text-[#5c5cbd]">Cours</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre catalogue complet de cours de robotique, 
            du niveau débutant aux projets les plus avancés.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="px-6 py-2 bg-[#5c5cbd] text-white rounded-full font-medium">
            Tous les cours
          </button>
          <button className="px-6 py-2 bg-white text-[#25346f] rounded-full font-medium border border-gray-200 hover:bg-gray-50">
            Débutant
          </button>
          <button className="px-6 py-2 bg-white text-[#25346f] rounded-full font-medium border border-gray-200 hover:bg-gray-50">
            Intermédiaire
          </button>
          <button className="px-6 py-2 bg-white text-[#25346f] rounded-full font-medium border border-gray-200 hover:bg-gray-50">
            Avancé
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="font-bold text-[#25346f]">{course.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#25346f] mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <button className="w-full bg-[#5c5cbd] text-white py-3 rounded-lg font-semibold hover:bg-[#4a4a9d] transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Commencer le cours
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};