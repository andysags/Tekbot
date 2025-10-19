import { Link } from 'react-router-dom';

const Exercise5 = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-neutral-50 ml-[240px]">
      <div className="w-full pl-8 pr-6 py-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <div className="text-sm text-gray-500">Modules &gt; Module 2 &gt; <span className="text-[#5C5CBD] font-semibold">Exercice 1</span></div>
          <button className="block mt-2 text-gray-500 hover:underline">← Retour au module</button>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-[#25346f]">Exercice : Construisez une navigation responsive</h1>
              <p className="text-sm text-gray-600 mt-2">Créez une barre de navigation qui s'adapte aux différentes tailles d'écran en utilisant HTML et CSS.</p>
            </div>
            <span className="inline-block text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full">Intermédiaire</span>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Progression</span>
               <span className="inline-block text-xs bg-violet-50 text-violet-400 px-2 py-0.5 rounded">Étape 3/5</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden mt-2">
              <div className="h-full bg-amber-400" style={{ width: '60%' }} />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20 7v6a5 5 0 01-5 5H9a5 5 0 01-5-5 4 4 0 018 0h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 13.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Sauvegarde automatique activée</span>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-sm font-semibold text-[#25346f] mb-3">Espace de travail</div>
            <div className="bg-[#0b1220] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0b1220]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-3 text-xs text-gray-300">index.html</span>
              </div>
              <div className="w-full h-[300px] bg-gradient-to-b from-[#0b1220] to-[#071026] rounded-b-lg p-6 text-white">
                <div className="font-mono text-sm opacity-80">Écrivez votre code HTML ici...</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold shadow inline-flex items-center gap-2">Valider</button>
              <button className="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg inline-flex items-center gap-2">Réessayer</button>
              <button className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-lg inline-flex items-center gap-2">Demander indice (0/3)</button>
              <div className="ml-auto">
                <Link to="/courses" className="bg-violet-600 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 shadow">Étape suivante</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-xl bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl text-amber-400">🏆</div>
              <h2 className="text-xl font-bold text-[#25346f] mt-4">Félicitations !</h2>
              <p className="text-sm text-emerald-600 mt-2">Félicitations — exercice validé.</p>
              <div className="mt-4 flex items-center justify-center gap-2 font-semibold">
                <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" fill="currentColor" />
                </svg>
                <div className="text-amber-500 text-lg">+10 points</div>
              </div>
              <div className="mt-6">
                <Link to="/courses" className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-full font-medium shadow">Étape suivante</Link>
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Instructions</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</div>
                  <div className="text-sm text-emerald-700">Créez une structure HTML pour la navigation</div>
                </div>

                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</div>
                  <div className="text-sm text-emerald-700">Ajoutez les styles CSS de base</div>
                </div>

                <div className="rounded-lg bg-violet-100 border border-violet-200 p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-200 text-violet-700 flex items-center justify-center text-xs">3</div>
                  <div className="text-sm text-violet-700">Implémentez la responsivité avec les media queries</div>
                </div>

                <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">4</div>
                  <div className="text-sm text-gray-700">Testez sur différentes tailles d'écran</div>
                </div>

                <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">5</div>
                  <div className="text-sm text-gray-700">Optimisez l'accessibilité</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Aide</div>
              <p className="text-sm text-gray-600 mt-2">Objectif : Une navigation responsive fonctionnelle</p>
              <p className="text-sm text-gray-500 mt-2">Indices utilisés : 0/3</p>
              <p className="text-sm text-gray-500 mt-3">Conseils : Testez votre code régulièrement et n'hésitez pas à demander des indices si vous êtes bloqué.</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Progression</div>
              <div className="text-sm text-gray-600 mt-2">Points totaux <span className="text-amber-500 font-semibold"> 30</span></div>
              <div className="text-sm text-gray-600">Badges débloqués <span className="text-violet-500 font-semibold">0</span></div>
              <div className="text-xs text-gray-400 mt-3">Terminez sans utiliser d'indices pour débloquer le badge "Résolveur rapide".</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Exercise5;
