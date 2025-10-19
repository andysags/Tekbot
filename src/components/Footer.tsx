import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github} from 'lucide-react'

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-xs text-gray-400 hover:text-gray-600">Tekbot</Link>
            <Link to="/products" className="text-xs text-gray-400 hover:text-gray-600">Produit</Link>
            <Link to="/support" className="text-xs text-gray-400 hover:text-gray-600">Support</Link>
          

          <div className="flex items-center space-x-3">
            <a aria-label="linkedin" href="#" className="text-gray-400 hover:text-gray-600 opacity-60">
              <Linkedin className="w-3 h-3" />
            </a>
            <a aria-label="twitter" href="#" className="text-gray-400 hover:text-gray-600 opacity-60">
              <Twitter className="w-3 h-3" />
            </a>
            <a aria-label="github" href="#" className="text-gray-400 hover:text-gray-600 opacity-60">
              <Github className="w-3 h-3" />
            </a>
            <a aria-label="tiktok" href="#" className="text-gray-400 hover:text-gray-600 opacity-60">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M16.5 3.5v6.2a4.3 4.3 0 0 1-4.3-4.3H9.8a6.7 6.7 0 1 0 6.7 6.7V8.2a6.1 6.1 0 0 0 0 12.2A6.1 6.1 0 0 0 22.6 14V6.8h-6.1z" />
                <path d="M8.6 21.9a4.3 4.3 0 1 1 0-8.6v8.6z" fillOpacity="0.9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
