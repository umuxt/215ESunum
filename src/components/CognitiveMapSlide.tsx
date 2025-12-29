import { GitBranch, TrendingUp, TrendingDown } from 'lucide-react';

export function CognitiveMapSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Bilişsel Harita ve İlişkiler</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Positive Feedback Loop */}
        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl p-6 border border-red-400/30">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="size-7 text-red-400" />
            <h3 className="text-xl">Pozitif Geri Besleme Döngüsü</h3>
          </div>
          <p className="text-sm text-white/70 mb-4">Kısır döngü - dengesizliği artırır</p>
          
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-lg mb-3 text-red-300">Otobüs Kümelenmesi Etkisi:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Geç Varış</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Daha Fazla Yolcu Birikimi</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Uzun Biniş Süresi</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Daha da Gecikmeler</span>
              </div>
              <div className="pl-4 text-white/60">↓ (döngü devam eder)</div>
            </div>
          </div>
        </div>

        {/* Negative Feedback Loop */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="size-7 text-blue-400" />
            <h3 className="text-xl">Negatif Geri Besleme Döngüsü</h3>
          </div>
          <p className="text-sm text-white/70 mb-4">Dengeleyici - sistemi stabilize eder</p>
          
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="text-lg mb-3 text-blue-300">Kalabalık Doygunluk Döngüsü:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Yolcu Talebi Artışı (+)</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Kalabalık Seviyesi Artışı (-)</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Yolcu Memnuniyeti Azalması (-)</span>
              </div>
              <div className="pl-4 text-white/60">↓</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Yolcu Talebi Azalması (doğal sınır)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl mb-4 flex items-center gap-2">
          <GitBranch className="size-6 text-purple-400" />
          Temel İlişkiler
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-black/20 rounded-lg p-3">
            <h4 className="text-green-400 mb-2">Doğrudan Pozitif (+)</h4>
            <p className="text-white/70">Trafik Yoğunluğu → Seyahat Süresi ↑</p>
          </div>
          <div className="bg-black/20 rounded-lg p-3">
            <h4 className="text-red-400 mb-2">Ters İlişki (-)</h4>
            <p className="text-white/70">Otobüs Frekansı ↑ → Bekleme Süresi ↓</p>
          </div>
          <div className="bg-black/20 rounded-lg p-3">
            <h4 className="text-yellow-400 mb-2">Dolaylı İlişki</h4>
            <p className="text-white/70">Yakıt Fiyatı → Bütçe → Aktif Otobüs Sayısı</p>
          </div>
          <div className="bg-black/20 rounded-lg p-3">
            <h4 className="text-blue-400 mb-2">Karşılıklı Nedensellik</h4>
            <p className="text-white/70">Geri besleme döngüleri ile sistem davranışı</p>
          </div>
        </div>
      </div>
    </div>
  );
}
