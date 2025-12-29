import { Target, CheckCircle, TrendingUp, Users } from 'lucide-react';

export function ConclusionSlide() {
  return (
    <div className="text-white space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
          <Target className="size-8 text-white" />
        </div>
        <h2 className="text-3xl mb-2">Sonuç ve Beklenen Etkiler</h2>
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30 mb-6">
        <h3 className="text-xl mb-3">Özet</h3>
        <p className="text-white/90 leading-relaxed">
          İstanbul Toplu Taşıma Sistemi, karmaşık bir <span className="text-blue-400">sosyo-teknik sistem</span> olarak 
          analiz edilmiş, temel problemleri (güvenilirlik ve aşırı kalabalık) tanımlanmış ve iki çözüm önerisi 
          geliştirilmiştir. <span className="text-cyan-400">Dinamik Talep Bazlı Çizelgeleme Sistemi</span>, 
          mevcut kısıtlarla uyumluluğu, maliyet etkinliği ve ölçeklenebilirliği nedeniyle seçilen çözüm 
          olmuştur.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="size-6 text-green-400" />
            Çözümün Ana Kazanımları
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Otobüs kümelenmesi önlenir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Yoğun saatlerde aşırı kalabalık azalır</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Yolcu memnuniyeti artar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Operasyonel verimlilik iyileşir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✓</span>
              <span>Yakıt ve maliyet tasarrufu sağlanır</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="size-6 text-blue-400" />
            Performans İyileştirme Hedefleri
          </h3>
          <div className="space-y-3">
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Zamanında Varış Oranı</span>
                <span className="text-blue-400 text-sm">↑ %30</span>
              </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Yolcu Yoğunluğu</span>
                <span className="text-cyan-400 text-sm">↓ %25</span>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Ortalama Bekleme Süresi</span>
                <span className="text-green-400 text-sm">↓ %40</span>
              </div>
            </div>
            <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Operasyonel Maliyet</span>
                <span className="text-purple-400 text-sm">↓ %15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
        <h3 className="text-lg mb-3 flex items-center gap-2">
          <Users className="size-5 text-purple-400" />
          Gelecek Vizyonu
        </h3>
        <p className="text-sm text-white/80 leading-relaxed">
          Bu sistem, İstanbul'un büyümesine paralel olarak <span className="text-purple-300">ölçeklenebilir</span> ve 
          <span className="text-purple-300"> adapte edilebilir</span> bir yapıya sahiptir. Yapay zeka ve 
          makine öğrenmesi ile daha da geliştirilebilir. Londra ve Singapur örneklerinde görüldüğü gibi, 
          veri odaklı karar verme mekanizmaları toplu taşımada devrim yaratabilir. İstanbul için de bu 
          dönüşüm, şehrin yaşam kalitesini artıracak ve sürdürülebilir mobilite hedeflerine ulaşmayı 
          sağlayacaktır.
        </p>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-white/10">
        <p className="text-lg text-white/70">Teşekkürler</p>
        <p className="text-sm text-white/50 mt-2">İstanbul Teknik Üniversitesi - END 215E</p>
        <p className="text-sm text-white/50">Grup 3 | Güz 2025</p>
      </div>
    </div>
  );
}
