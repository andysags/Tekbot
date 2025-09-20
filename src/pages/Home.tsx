import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12 mb-20">
            {/* Left: Text */}
            <div className="pr-8">
              <h1 className="font-['Outfit'] font-extrabold text-[44px] md:text-[64px] lg:text-[72px] mb-6 leading-tight">
                <span className="text-[#25346f]">Maîtrisez la </span>
                <span className="text-[#5C5CBD]">Robotique</span>
                <span className="text-[#25346f]"> avec </span>
                <br />
                <span className="text-[#25346f]">Tekbot </span>
                <span className="text-[#5C5CBD]">Academy</span>
              </h1>

              <p className="text-gray-600 mb-10 max-w-xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial', fontSize: 20 }}>
                Votre parcours vers l'excellence en robotique commence ici. Accédez à des cours
                complets, des simulateurs pratiques et une communauté inspirante.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  to="/courses"
                  style={{ width: 270, height: 47 }}
                  className="bg-[#2d9bf0] text-white rounded-lg font-semibold hover:bg-[#1f86d6] transition-colors flex items-center justify-center gap-2 shadow-2xl"
                >
                  <Play className="w-4 h-4" />
                  S'inscrire Maintenant
                </Link>

                <Link
                  to="/courses"
                  style={{ width: 270, height: 47 }}
                  className="border border-gray-300 text-[#25346f] bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Explorer les Cours
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex items-center justify-end">
              <img
                src="/image1.png"
                alt="Hero"
                className="w-[560px] h-[320px] object-cover rounded-[18px] shadow-2xl"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          {/* Notre Mission Section */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto text-center py-10 px-6 ">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#25346f] mb-4">
                Notre mission : <span className="text-[#5C5CBD]">Démocratiser la Robotique</span>
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial', fontSize: 18 }}>
                Tekbot Academy s'engage à rendre l'apprentissage de la robotique accessible et
                stimulant pour tous, des débutants aux experts. Nous croyons que la pratique est la clé
                de la maîtrise.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          {/* Pourquoi Choisir Tekbot Academy */}
          <div className="max-w-7xl mx-auto mb-16 px-4">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#25346f] mb-8">
              Pourquoi Choisir Tekbot <span className="text-[#5C5CBD]">Academy</span> ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center mx-auto mb-4" style={{ width: 80, height: 80 }}>
                  <img src="/Vector.png" alt="Modules" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-lg font-bold text-[#25346f] mb-2">Modules Interactifs</h3>
                <p className="text-gray-800 text-lg md:text-xl">
                  Apprenez l'électronique, la mécanique et la programmation robotique à travers des leçons
                  interactives et progressives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center mx-auto mb-4" style={{ width: 80, height: 80 }}>
                  <img src="/Vector(1).png" alt="Simulateurs" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-lg font-bold text-[#25346f] mb-2">Simulateurs Intégrés</h3>
                <p className="text-gray-800 text-lg">
                  Mettez vos connaissances en pratique avec Webots et Gazebo, nos simulateurs robotiques avancés.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center mx-auto mb-4" style={{ width: 80, height: 80 }}>
                  <img src="/Vector(2).png" alt="Communauté" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <h3 className="text-lg font-bold text-[#25346f] mb-2">Communauté Active</h3>
                <p className="text-gray-800 text-lg">
                  Échangez avec d'autres passionnés de robotique, posez vos questions et collaborez sur des projets.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Robot Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 10.png')" }} />
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e2a86]/80 via-[#5C5CBD]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center ">
          <div className="w-full flex items-center relative">
            <img src="/robot.png" alt="Robot" className="hidden md:block absolute object-contain pointer-events-none select-none z-0" style={{ width: '394px', height: '539px', left: '-140px' }} />

            <div className="relative z-10 text-center text-white mx-auto px-6 py-12 max-w-3xl md:pl-[400px] lg:pl-[460px] md:pr-[340px] lg:pr-[400px]">
              <h2 className="text-4xl font-extrabold mb-4">Prêt à Construire Votre Avenir ?</h2>
              <p className="text-white opacity-95 mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial', fontSize: 18}}>
                Rejoignez des milliers d'apprenants et lancez-vous dans l'univers fascinant de la
                robotique. Des fondamentaux aux projets avancés, tout est à portée de main.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/courses" className="bg-[#57b3f7] hover:bg-[#2d9bf0] text-white rounded-lg px-6 py-3 font-semibold shadow">S'inscrire Maintenant</Link>
                <Link to="/courses" className="border border-white/60 text-white rounded-lg px-6 py-3 font-medium">Voir tous les Cours</Link>
              </div>
            </div>

            <img
              src="/bras.png"
              alt="Bras robot"
              className="hidden md:block absolute object-contain pointer-events-none select-none z-0"
              style={{ width: '454px', height: '409px', right: '-400px', top: '-200px', transform: 'rotate(02.42deg)' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};