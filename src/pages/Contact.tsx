import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-8 ml-64">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-['Outfit'] font-extrabold text-4xl md:text-5xl mb-4">
            <span className="text-[#25346f]">Contactez</span>
            <span className="text-[#5c5cbd]"> Nous</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner 
            dans votre parcours d'apprentissage de la robotique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#25346f] mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c5cbd] focus:border-transparent outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c5cbd] focus:border-transparent outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c5cbd] focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="cours">Question sur les cours</option>
                  <option value="technique">Support technique</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c5cbd] focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5c5cbd] text-white py-4 rounded-lg font-semibold hover:bg-[#4a4a9d] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#25346f] mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5c5cbd]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5c5cbd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#25346f] mb-1">Email</h3>
                    <p className="text-gray-600">contact@tekbot-academy.fr</p>
                    <p className="text-gray-600">support@tekbot-academy.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5c5cbd]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#5c5cbd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#25346f] mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5c5cbd]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#5c5cbd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#25346f] mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue de l'Innovation<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5c5cbd]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#5c5cbd]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#25346f] mb-1">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Samedi: 10h00 - 16h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#25346f] mb-4">Questions fréquentes</h3>
              <div className="space-y-3">
                <a href="#" className="block text-[#5c5cbd] hover:underline">
                  Comment commencer un cours ?
                </a>
                <a href="#" className="block text-[#5c5cbd] hover:underline">
                  Quels sont les prérequis techniques ?
                </a>
                <a href="#" className="block text-[#5c5cbd] hover:underline">
                  Comment obtenir un certificat ?
                </a>
                <a href="#" className="block text-[#5c5cbd] hover:underline">
                  Politique de remboursement
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};