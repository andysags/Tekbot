import { Link } from 'react-router-dom';
import { Play, Users, Award, BookOpen } from 'lucide-react';

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

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#eef6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#2d9bf0]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Cours Interactifs</h3>
              <p className="text-gray-600">
                Apprenez avec des cours structurés et des exercices pratiques adaptés à votre niveau.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#eef6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#2d9bf0]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Communauté Active</h3>
              <p className="text-gray-600">
                Rejoignez une communauté passionnée et partagez vos projets avec d'autres apprenants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#eef6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#2d9bf0]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Certifications</h3>
              <p className="text-gray-600">
                Obtenez des certifications reconnues pour valider vos compétences en robotique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#25346f] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2d9bf0] mb-2">1000+</div>
              <div className="text-lg">Étudiants actifs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2d9bf0] mb-2">50+</div>
              <div className="text-lg">Cours disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2d9bf0] mb-2">95%</div>
              <div className="text-lg">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2d9bf0] mb-2">24/7</div>
              <div className="text-lg">Support disponible</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};