import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, Mail, LogIn, Settings, Award, Play, Users } from 'lucide-react';

export const Navigation = (): JSX.Element => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Tableau de Bord', icon: User },
    { path: '/courses', label: 'Modules', icon: BookOpen },
    { path: '/exercises', label: 'Exercices', icon: Play },
    { path: '/competitions', label: 'Compétitions', icon: Award },
    { path: '/community', label: 'Communauté', icon: Users }
  ];

  return (
  <nav className="fixed left-0 top-0 bg-[C7C7C7] shadow-lg border-r border-gray-100 z-50 sidebar-wide" style={{ width: 292, height: '100vh' }}>
      <div className="flex flex-col h-full">
        {/* Logo */}
      <div className="px-6 border-b border-gray-100" style={{ paddingTop: 12, paddingBottom: 12 }}>
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Tekbot logo" className="h-auto" style={{ width: 160, height: 'auto' }} />
        <span className="sr-only">Tekbot</span>
          </Link>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 py-6 relative">
      <div className="space-y-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-gray-100 text-[#25346f]'
                      : 'text-[#6b7280] hover:bg-gray-50 hover:text-[#25346f]'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-[#25346f]' : 'text-gray-400'}`} />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="nav-bottom-sticky">
          <div className="flex flex-col items-center">
            <button style={{ width: 270, height: 47 }} className="bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" />
              <span>Paramètres</span>
            </button>
            <div style={{ height: 8 }} />
            <button style={{ width: 270, height: 47 }} className="bg-red-400 text-white rounded-lg flex items-center justify-center gap-2">
              <span>⇢</span>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};