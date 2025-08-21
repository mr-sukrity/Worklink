import { Outlet } from "react-router-dom"
import Header from "@/components/Header";
import { Github,  X, Heart } from 'lucide-react';

const AppLayout = () => {
  return (
    <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container mx-auto px-5">
            <Header />
            <Outlet />
        </main>
        <footer className="border-t border-gray-700 bg-gray-800 py-8 mt-16">
          <div className="container mx-auto px-5">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/its-bismay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/RewatchRoom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-lg">
                <span>Made with</span>
                <Heart className="h-6 w-6 fill-blue-500" />
                <span>by</span>
                <span className="font-medium text-white">Bismay Bibhabasu</span>
              </div>
              <div className="text-xs text-gray-400">
                © {new Date().getFullYear()} All rights reserved
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
export default AppLayout;