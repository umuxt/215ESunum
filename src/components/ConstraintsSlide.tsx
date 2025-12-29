import { Lock, MapPin, DollarSign, Users } from 'lucide-react';

export function ConstraintsSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Sistem Kısıtlamaları</h2>

      <div className="grid grid-cols-2 gap-5">
        {/* Physical Constraints */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-5 border border-purple-400/30">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="size-6 text-purple-400" />
            <h3 className="text-lg">Fiziksel ve Altyapı Kısıtları</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Tarihi bölgelerde yol genişletme imkansızlığı (Eminönü, Beşiktaş, Şişli)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>İstanbul'un dik topografyası (7 tepe) - standart otobüslerin kullanılamaması</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Özel araç trafiği ile aynı yolu paylaşma zorunluluğu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Boğaz coğrafyası - iki kıta arası geçiş sınırlaması</span>
            </li>
          </ul>
        </div>

        {/* Operational Constraints */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-5 border border-blue-400/30">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="size-6 text-blue-400" />
            <h3 className="text-lg">Operasyonel Kısıtlar</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>Sabit filo büyüklüğü - yeni otobüs temini yıllar alır</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>Yasal yolcu kapasitesi limitleri (80-100 kişi)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>Statik çizelgeler - gerçek zamanlı talebe uyum sağlayamama</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>Zorunlu bakım ve sürücü dinlenme süreleri</span>
            </li>
          </ul>
        </div>

        {/* Economic Constraints */}
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-5 border border-yellow-400/30">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="size-6 text-yellow-400" />
            <h3 className="text-lg">Ekonomik ve Düzenleyici Kısıtlar</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Kar amacı gütmeme - sosyal fayda odaklı işletme</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Erişilebilir bilet fiyatları - gelir esnekliği yok</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>Sürücü çalışma saatleri yasal sınırlamaları</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">•</span>
              <span>UKOME ve İBB merkezi karar verme - otorite sınırlaması</span>
            </li>
          </ul>
        </div>

        {/* Social Constraints */}
        <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-5 border border-green-400/30">
          <div className="flex items-center gap-3 mb-3">
            <Users className="size-6 text-green-400" />
            <h3 className="text-lg">Sosyal ve Davranışsal Kısıtlar</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>İnsan-Aktivite Sistemi - teorik planlamayı bozan yolcu davranışları</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Kalabalık duraklarda yolcuların arkaya geçmemesi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Dolu otobüslere zorla binme girişimleri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Planlanan 20 saniyelik durağın birkaç dakikaya uzaması</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 mt-4">
        <p className="text-sm text-white/90 italic">
          Bu kısıtlamalar, sistemin istenen duruma ulaşmasını engelleyen sınırlar ve limitleri temsil eder. 
          Çözüm önerileri bu kısıtları göz önünde bulundurarak geliştirilmiştir.
        </p>
      </div>
    </div>
  );
}
