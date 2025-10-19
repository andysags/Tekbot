import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export const About = (): JSX.Element => {
  const team = [
    {
      name: "Dr. Marie Dubois",
      role: "Directrice Pédagogique",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Docteure en robotique avec 15 ans d'expérience dans l'enseignement."
    },
    {
      name: "Thomas Martin",
      role: "Ingénieur Robotique",
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Expert en intelligence artificielle et systèmes autonomes."
    },
    {
      name: "Sophie Laurent",
      role: "Développeuse Pédagogique",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Spécialisée dans la création de contenus éducatifs interactifs."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-8 ml-64">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-['Outfit'] font-extrabold text-4xl md:text-5xl mb-6">
            <span className="text-[#25346f]">À propos de </span>
            <span className="text-[#5c5cbd]">Tekbot Academy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tekbot Academy est née de la passion de rendre la robotique accessible à tous. 
            Notre mission est de former la prochaine génération d'innovateurs en robotique 
            à travers des cours pratiques et une pédagogie moderne.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5c5cbd]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#5c5cbd]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Notre Mission</h3>
              <p className="text-gray-600">
                Démocratiser l'apprentissage de la robotique et former les talents de demain.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5c5cbd]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#5c5cbd]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous utilisons les dernières technologies pour créer des expériences d'apprentissage uniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5c5cbd]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#5c5cbd]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Communauté</h3>
              <p className="text-gray-600">
                Nous croyons en la force de la communauté pour accélérer l'apprentissage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5c5cbd]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#5c5cbd]" />
              </div>
              <h3 className="text-xl font-bold text-[#25346f] mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir une éducation de la plus haute qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#25346f] mb-6 text-center">Notre Histoire</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Fondée en 2020 par une équipe d'ingénieurs passionnés, Tekbot Academy est née du constat 
                que l'apprentissage de la robotique était souvent complexe et peu accessible au grand public.
              </p>
              <p className="mb-6">
                Nous avons développé une approche pédagogique unique qui combine théorie et pratique, 
                permettant à chacun d'apprendre à son rythme tout en travaillant sur des projets concrets 
                et stimulants.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'avoir formé plus de 1000 étudiants et de continuer 
                à innover dans le domaine de l'éducation en robotique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#25346f] mb-12 text-center">Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto border-4 border-[#5c5cbd]/20"></div>
                </div>
                <h3 className="text-xl font-bold text-[#25346f] mb-2">{member.name}</h3>
                <p className="text-[#5c5cbd] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#25346f] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Rejoignez l'Aventure Tekbot Academy</h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos cours et commencez votre parcours dans la robotique dès aujourd'hui.
          </p>
          <button className="bg-[#5c5cbd] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4a4a9d] transition-colors">
            Voir nos cours
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;