export const Exercise = (): JSX.Element => {
  return (
  <div className="min-h-screen bg-neutral-50 ml-[240px]">
  <div className="w-full pl-8 pr-6 py-4 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
  {/* Header area spanning full width */}
  <div className="lg:col-span-2">
          <div className="flex items-start">
            <div className="text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-400">Modules &gt; Module 1 &gt; <span className="text-[#5C5CBD] font-semibold">Exercice 1</span></div>
              </div>
              <button className="block mt-2 text-gray-500 hover:underline">← Retour au module</button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-[#25346f]">Exercice : Construisez une navigation responsive</h1>
              <p className="text-sm text-gray-600 mt-2">Créez une barre de navigation qui s'adapte aux différentes tailles d'écran en utilisant HTML et CSS.</p>
            </div>
            <div>
              <span className="inline-block text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full">Intermédiaire</span>
            </div>
          </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Progression</span>
                 <span className="inline-block text-xs bg-violet-50 text-violet-400 px-2 py-0.5 rounded">Étape 1/5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden mt-2">
                <div className="h-full bg-rose-500" style={{ width: '24%' }} />
              </div>
              <div className="text-xs text-gray-400 mt-2">Sauvegarde automatique activée</div>
            </div>
        </div>

  {/* Workspace (center) */}
  <div className="lg:col-span-1">
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-sm font-semibold text-[#25346f] mb-3">Espace de travail</div>
            {/* Editor chrome */}
            <div className="bg-[#0b1220] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0b1220]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] block" />
                </div>
                <div className="ml-3 text-xs text-gray-300">index.html</div>
              </div>
              <textarea
                className="w-full h-[360px] bg-[#081026] text-white rounded-b-lg p-6 font-mono text-sm resize-none focus:outline-none"
                placeholder="Écrivez votre code HTML ici..."
              />
            </div>

            <div className="mt-4 flex items-center gap-3 flex-nowrap">
              <button className="bg-emerald-500 text-white px-3 py-2 rounded-lg font-semibold shadow inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Valider</span>
              </button>
              <button className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-2 rounded-lg inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 11-9-9" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3v6h-6" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Réessayer</span>
              </button>
              <div className="inline-flex items-center gap-3">
                <button className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-lg inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6" stroke="#a16207" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2a4 4 0 00-4 4c0 1.657 1 2.5 1.5 3 1 1 1.5 2 1.5 3h5c0-1 0.5-2 1.5-3 .5-.5 1.5-1.343 1.5-3a4 4 0 00-4-4z" stroke="#a16207" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  <span>Demander indice(0/3)</span>
                </button>
                <button className="bg-white border border-violet-200 text-violet-700 px-3 py-2 rounded-lg inline-flex items-center gap-2">
                  <span>Étape suivante</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M9 6L15 12L9 18" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

  {/* Right: instructions panel */}
  <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Instructions</div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-violet-100 border border-violet-200 p-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-200 text-violet-700 flex items-center justify-center text-xs">1</div>
                    <div className="text-sm text-violet-700">Créez une structure HTML pour la navigation</div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">2</div>
                    <div className="text-sm text-gray-700">Ajoutez les styles CSS de base</div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">3</div>
                    <div className="text-sm text-gray-700">Implémentez la responsivité avec les media queries</div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">4</div>
                    <div className="text-sm text-gray-700">Testez sur différentes tailles d'écran</div>
                  </div>

                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs">5</div>
                    <div className="text-sm text-gray-700">Optimisez l'accessibilité</div>
                  </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Aide</div>
              <p className="text-sm text-gray-600 mt-2">Objectif : Une navigation responsive fonctionnelle</p>
              <p className="text-sm text-gray-500 mt-2">Indices utilisés : 0/3</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-[#25346f]">Progression</div>
              <div className="text-sm text-gray-600 mt-2">Points totaux <span className="text-amber-500 font-semibold">0</span></div>
              <div className="text-sm text-gray-600">Badges débloqués <span className="text-violet-500 font-semibold">0</span></div>
            </div>
          </div>
        </aside>
    </div>
    </div>
  );
};
export default Exercise;