import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bus } from 'lucide-react';
import { IntroSlide } from './components/IntroSlide';
import { SystemDefinitionSlide } from './components/SystemDefinitionSlide';
import { ProblemsSlide } from './components/ProblemsSlide';
import { CognitiveMapSlide } from './components/CognitiveMapSlide';
import { ConstraintsSlide } from './components/ConstraintsSlide';
import { SolutionsSlide } from './components/SolutionsSlide';
import { ChosenSolutionSlide } from './components/ChosenSolutionSlide';
import { ImplementationSlide } from './components/ImplementationSlide';
import { RealMapSimulation } from './components/RealMapSimulation';
import { ConclusionSlide } from './components/ConclusionSlide';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: IntroSlide, title: 'Giriş' },
    { component: SystemDefinitionSlide, title: 'Sistem Tanımı' },
    { component: ProblemsSlide, title: 'Problemler' },
    { component: CognitiveMapSlide, title: 'Bilişsel Harita' },
    { component: ConstraintsSlide, title: 'Kısıtlamalar' },
    { component: SolutionsSlide, title: 'Çözüm Önerileri' },
    { component: ChosenSolutionSlide, title: 'Seçilen Çözüm' },
    { component: ImplementationSlide, title: 'Uygulama Aşaması' },
    { component: RealMapSimulation, title: 'Canlı Demo - Gerçek Harita' },
    { component: ConclusionSlide, title: 'Sonuç' },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bus className="size-8 text-blue-400" />
            <div>
              <h1 className="text-white">İstanbul Toplu Taşıma Sistemi Analizi</h1>
              <p className="text-sm text-blue-300">END 215E - Sistem Düşüncesi ve Analizi</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/70">Grup 3</p>
            <p className="text-xs text-white/50">İTÜ - Güz 2025</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-12 min-h-[600px]">
              <CurrentSlideComponent />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            <ChevronLeft className="size-5" />
            Önceki
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-blue-400'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/70 text-sm">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              Sonraki
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}