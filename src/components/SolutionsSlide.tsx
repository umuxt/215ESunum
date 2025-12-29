import { Lightbulb, TrafficCone, Activity } from 'lucide-react';

export function SolutionsSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Çözüm Önerileri</h2>

      <div className="space-y-5">
        {/* Solution 1 */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-400/30">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-500/30 rounded-full p-3 mt-1">
              <TrafficCone className="size-7 text-indigo-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Çözüm 1: Akıllı Özel Otobüs Şeritleri</h3>
              <p className="text-sm text-indigo-300 mb-3">Problem 1 (Güvenilirlik) için çözüm</p>
              
              <div className="space-y-3">
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="mb-2 text-indigo-300">Ana Bileşenler:</h4>
                  <ul className="space-y-1 text-sm text-white/80">
                    <li>• <span className="text-indigo-300">Fiziksel Ayrım:</span> Otobüsleri özel trafik akışından ayırmak</li>
                    <li>• <span className="text-indigo-300">Transit Sinyal Önceliği (TSP):</span> Kavşaklarda trafik ışığı önceliği</li>
                    <li>• <span className="text-indigo-300">V2I İletişimi:</span> Araç-altyapı haberleşmesi</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
                    <h5 className="text-green-300 mb-2">✓ Avantajlar:</h5>
                    <ul className="space-y-1 text-white/70">
                      <li>• Deterministik seyahat süresi</li>
                      <li>• Gecikme varyansında azalma</li>
                      <li>• Otobüs kümelenmesi önlenir</li>
                      <li>• Yakıt tasarrufu</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-3">
                    <h5 className="text-red-300 mb-2">✗ Dezavantajlar:</h5>
                    <ul className="space-y-1 text-white/70">
                      <li>• Fiziksel altyapı yatırımı gerekli</li>
                      <li>• Dar koridorlarda uygulanamaz</li>
                      <li>• Özel araç kapasitesi azalır</li>
                      <li>• Çakışma noktaları dikkat gerektirir</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30">
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/30 rounded-full p-3 mt-1">
              <Activity className="size-7 text-cyan-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Çözüm 2: Dinamik Talep Bazlı Çizelgeleme</h3>
              <p className="text-sm text-cyan-300 mb-3">Problem 2 (Aşırı Kalabalık) için çözüm</p>
              
              <div className="space-y-3">
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="mb-2 text-cyan-300">Ana Bileşenler:</h4>
                  <ul className="space-y-1 text-sm text-white/80">
                    <li>• <span className="text-cyan-300">Gerçek Zamanlı Veri:</span> İstanbulkart kullanım verisi</li>
                    <li>• <span className="text-cyan-300">Yapay Zeka Algoritması:</span> Talep tahmini ve optimizasyon</li>
                    <li>• <span className="text-cyan-300">Dinamik Frekans:</span> Otomatik sefer sıklığı ayarlama</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
                    <h5 className="text-green-300 mb-2">✓ Avantajlar:</h5>
                    <ul className="space-y-1 text-white/70">
                      <li>• Fiziksel altyapı yatırımı yok</li>
                      <li>• Yüksek fayda/maliyet oranı</li>
                      <li>• Mevcut kısıtlarla uyumlu</li>
                      <li>• Ölçeklenebilir</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-3">
                    <h5 className="text-red-300 mb-2">✗ Dezavantajlar:</h5>
                    <ul className="space-y-1 text-white/70">
                      <li>• Veri kalitesine bağımlılık</li>
                      <li>• Algoritma karmaşıklığı</li>
                      <li>• İşgücü kısıtları</li>
                      <li>• İlk uyum süreci</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
