import { useState } from 'react';
// Page Communautaire (Communauties)
// MemberRow removed, rendered inline in sidebar

const Communauties = (): JSX.Element => {
  const members = [
    { rank: 1, name: 'Marie Curie', points: 1250 },
    { rank: 2, name: 'Alan Turing', points: 980 },
    { rank: 3, name: 'Ada Lovelace', points: 870 }
  ];

  const [messages, setMessages] = useState([
    { id: 1, user: 'Communauté', text: "Bonjour à tous ! Qui travaille sur le mini-projet Python du robot suiveur de ligne ?", time: '10 min', isMine: false },
    { id: 2, user: 'Luc', text: "Salut ! Je viens de commencer, j'ai une question sur l'algorithme de détection de ligne.", time: '9 min', isMine: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    const trimmed = inputMessage.trim();
    if (!trimmed) return;
    setMessages((s) => [...s, { id: Date.now(), user: 'Vous', text: trimmed, time: 'Maintenant', isMine: true }]);
    setInputMessage('');
  };

  const discussions = [
    { title: 'Problèmes de connexion avec le simulateur Webots', author: 'Alexandre Dupuis', tag: 'Support Technique', replies: 0, views: 220, time: '2h' },
    { title: 'Meilleures pratiques pour la programmation de bras robotiques en Python', author: 'Sophie Dubois', tag: 'Projets Robotiques', replies: 2, views: 120, time: '5h' },
    { title: 'Idées de mini-projets pour débutants en électronique', author: 'Marc Lefebvre', tag: 'Électronique', replies: 7, views: 450, time: '1d' },
    { title: 'Partage de ressources : Tutoriels avancés sur ROS', author: 'Laura Tremblay', tag: 'Ressources', replies: 5, views: 200, time: '2d' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="pl-[260px]">
        <div className="max-w-7xl mx-auto py-12 px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-[#25346f]">Forum Communautaire Tekbot Academy</h1>
          </div>

          {/* Action cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-3">👋</div>
              <h3 className="font-semibold text-[#25346f]">Bienvenue !</h3>
              <p className="text-sm text-gray-600 mt-2">Nouvel ici? Commencez par vous présenter et découvrez nos règles.</p>
              <button className="mt-4 bg-[#2d9bf0] text-white px-4 py-2 rounded-md">Présentez-vous</button>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-3">💬</div>
              <h3 className="font-semibold text-[#25346f]">Poser une question</h3>
              <p className="text-sm text-gray-600 mt-2">Obtenez de l'aide de la communauté ou partagez vos connaissances.</p>
              <button className="mt-4 bg-[#2d9bf0] text-white px-4 py-2 rounded-md">Créer un nouveau fil</button>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-3">💡</div>
              <h3 className="font-semibold text-[#25346f]">Suggestions</h3>
              <p className="text-sm text-gray-600 mt-2">Aidez-nous à améliorer la plateforme avec vos idées et retours.</p>
              <button className="mt-4 bg-[#2d9bf0] text-white px-4 py-2 rounded-md">Partager une idée</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main column */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-[#25346f] mb-4">Discussions Récentes</h2>
              <div className="space-y-4">
                {discussions.map((d, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-100" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[#25346f] text-sm">{d.title}</h3>
                        <div className="text-xs text-gray-500">{d.time}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="text-xs text-gray-500">Par {d.author}</div>
                        <div className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{d.tag}</div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500 flex items-center gap-4">
                        <div>{d.replies} réponses</div>
                        <div>{d.views} vues</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="mt-8">
                <h3 className="text-md font-semibold text-[#25346f] mb-4">Catégories de Discussion</h3>
                <ul className="grid md:grid-cols-3 gap-4">
                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">🔧</span>
                    <div>
                      <div className="font-semibold">Support Technique</div>
                      <div className="text-xs text-gray-500">Aide pour vos problèmes techniques.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">🤖</span>
                    <div>
                      <div className="font-semibold">Projets Robotiques</div>
                      <div className="text-xs text-gray-500">Partagez et discutez de vos projets.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">💻</span>
                    <div>
                      <div className="font-semibold">Programmation</div>
                      <div className="text-xs text-gray-500">Discussions autour du code (Python, C++).</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📰</span>
                    <div>
                      <div className="font-semibold">Actualités &amp; Événements</div>
                      <div className="text-xs text-gray-500">Annonces, meetups et compétitions.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">💡</span>
                    <div>
                      <div className="font-semibold">Suggestions</div>
                      <div className="text-xs text-gray-500">Idées pour améliorer la plateforme et les cours.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">💬</span>
                    <div>
                      <div className="font-semibold">Discussion Générale</div>
                      <div className="text-xs text-gray-500">Sujets divers et discussions communautaires.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-[#25346f]">Chat en Direct</h4>
                <div className="mt-3 bg-gray-50 p-3 rounded h-48 overflow-auto text-sm space-y-3" id="chat-box">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`p-2 rounded-lg max-w-[85%] ${m.isMine === true ? 'ml-auto text-right text-gray-800' : 'mr-auto text-left text-gray-800'}`}
                      style={{ backgroundColor: m.isMine === true ? '#eff6ff' : '#f3f4f6' }}>
                      <div className="text-xs">{m.text}</div>
                      <div className="text-xs text-gray-400 mt-1">{m.user} · {m.time}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  <input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm" placeholder="Ecrivez votre message..." />
                  <button onClick={sendMessage} className="bg-[#2d9bf0] text-white px-3 py-2 rounded">→</button>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-[#25346f]">Sujets Populaires</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-between"><span>Débogage de capteurs</span><span className="text-xs text-gray-400"> 580 vues</span></li>
                  <li className="flex items-center justify-between"><span>Programmation C++ pour microcontrôleurs</span><span className="text-xs text-gray-400">720 vues</span></li>
                  <li className="flex items-center justify-between"><span>Conception de châssis de robot</span><span className="text-xs text-gray-400">690 vues</span></li>
                  <li className="flex items-center justify-between"><span>Utilisation des encodeurs</span><span className="text-xs text-gray-400">580 vues</span></li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-[#25346f]">Membres Actifs</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  {members.map((m) => (
                    <li key={m.rank} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-green-200 inline-block" />
                      <span>{m.name}</span>
                      <span className="ml-auto text-xs text-gray-400">{m.points} pts</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-[#25346f]">Ressources Rapides</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>Règles du Forum</li>
                  <li>FAQ du Communautaire</li>
                  <li>Signaler un abus</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communauties;
