import { CheckCircle, Star, TrendingUp } from 'lucide-react';

export function ChosenSolutionSlide() {
  return (
    <div className="text-white space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
          <CheckCircle className="size-8 text-green-400" />
        </div>
        <h2 className="text-3xl mb-2">Seçilen Çözüm</h2>
        <p className="text-xl text-cyan-300">Dinamik Talep Bazlı Çizelgeleme Sistemi</p>
      </div>

      <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-400/30 mb-6">
        <h3 className="text-xl mb-3 flex items-center gap-2">
          <Star className="size-6 text-yellow-400" />
          Neden Bu Çözüm?
        </h3>
        <p className="text-white/90 leading-relaxed">
          Dinamik Talep Bazlı Çizelgeleme Sistemi, İstanbul'un mevcut altyapı, ekonomik ve düzenleyici 
          kısıtlarıyla <span className="text-green-400">yüksek uyumluluk</span> göstermektedir. Fiziksel 
          yol değişikliği gerektirmeden, mevcut dijital sistemler ve İstanbulkart verisi kullanılarak 
          uygulanabilir.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h4 className="text-lg mb-3 text-cyan-300">Temel Avantajlar</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <TrendingUp className="size-4 text-green-400 mt-1 flex-shrink-0" />
              <span><strong>Fiziksel kısıt yok:</strong> Topografya ve tarihi bölge problemlerini aşar</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="size-4 text-green-400 mt-1 flex-shrink-0" />
              <span><strong>Operasyonel esneklik:</strong> Hava, zaman, diğer ulaşım aksaklıklarına uyum</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="size-4 text-green-400 mt-1 flex-shrink-0" />
              <span><strong>Yüksek fayda/maliyet:</strong> Sadece yazılım geliştirme gerekir</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="size-4 text-green-400 mt-1 flex-shrink-0" />
              <span><strong>Sürdürülebilir:</strong> İstanbul büyüdükçe yeni rotalara genişletilebilir</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="size-4 text-green-400 mt-1 flex-shrink-0" />
              <span><strong>Programlanabilir:</strong> Gelecekteki değişikliklere adapte edilebilir</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h4 className="text-lg mb-3 text-blue-300">Performans İyileştirmeleri</h4>
          <div className="space-y-3 text-sm">
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span>Yolcu Yoğunluğu</span>
                <span className="text-green-400">↓ Azalma</span>
              </div>
              <p className="text-xs text-white/60">Otobüs içi konfor artışı</p>
            </div>
            
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span>Bekleme Süreleri</span>
                <span className="text-green-400">↓ Kısalma</span>
              </div>
              <p className="text-xs text-white/60">Duraklarda daha az bekleyiş</p>
            </div>
            
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span>Yolcu Memnuniyeti</span>
                <span className="text-green-400">↑ Artış</span>
              </div>
              <p className="text-xs text-white/60">Daha iyi seyahat deneyimi</p>
            </div>
            
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span>Operasyonel Verimlilik</span>
                <span className="text-green-400">↑ İyileşme</span>
              </div>
              <p className="text-xs text-white/60">Yakıt ve maliyet tasarrufu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 mt-4">
        <p className="text-sm text-white/90 text-center">
          <span className="text-blue-300">Bilişsel Harita Değişkenleri:</span> Yolcu Talebi, Frekans, 
          Yoğunluk ve Bekleme Süresi doğrudan hedeflenir ve optimize edilir.
        </p>
      </div>
    </div>
  );
}
