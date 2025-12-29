import { Settings, FileText, DollarSign, Globe } from 'lucide-react';

export function ImplementationSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Uygulama Aşaması</h2>

      {/* Implementation Steps */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30 mb-5">
        <h3 className="text-xl mb-4 flex items-center gap-2">
          <Settings className="size-6 text-blue-400" />
          Uygulama Adımları
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
            <div className="flex-1">
              <h4 className="mb-1">Veri Entegrasyonu ve API Kurulumu</h4>
              <p className="text-sm text-white/70">BELBİM (İstanbulkart) ve İETT Telemetri sistemleri arasında güvenli bağlantılar</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
            <div className="flex-1">
              <h4 className="mb-1">Eşik Değerleri Belirleme</h4>
              <p className="text-sm text-white/70">Her rota için doluluk oranı belirleme (örn. %85 dolulukta ek sefer)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
            <div className="flex-1">
              <h4 className="mb-1">Algoritma Geliştirme ve Simülasyon</h4>
              <p className="text-sm text-white/70">Yapay zeka destekli çizelgeleme algoritmasının test edilmesi</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</div>
            <div className="flex-1">
              <h4 className="mb-1">Pilot Alan Seçimi</h4>
              <p className="text-sm text-white/70">En yoğun Metrobüs besleyici hatlar (Avcılar, Cevizlibağ transferleri)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</div>
            <div className="flex-1">
              <h4 className="mb-1">Personel Eğitimi</h4>
              <p className="text-sm text-white/70">Sevk memurlarının sistem arayüzü ve onay süreçleri eğitimi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Required Documents */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-3 flex items-center gap-2">
            <FileText className="size-5 text-green-400" />
            Gerekli Dokümantasyon
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Sistem Gereksinim Spesifikasyonu (SRS)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Fonksiyonel Tasarım Dökümanı (FDD)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Veri Gizliliği ve Güvenlik Protokolü (KVKK)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Kapasite ve Yedekleme Protokolü</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Maliyet-Fayda Analizi Raporu</span>
            </li>
          </ul>
        </div>

        {/* Investment Costs */}
        <div className="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-3 flex items-center gap-2">
            <DollarSign className="size-5 text-yellow-400" />
            Yazılım ve Altyapı Yatırımı
          </h3>
          <div className="space-y-2 text-sm">
            <div className="bg-black/20 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Veri İşleme Sunucusu</span>
                <span className="text-yellow-400">$15-20K</span>
              </div>
              <p className="text-xs text-white/50">Dell PowerEdge R750</p>
            </div>
            <div className="bg-black/20 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Cloud Depolama</span>
                <span className="text-yellow-400">$2.5K/ay</span>
              </div>
              <p className="text-xs text-white/50">Azure/AWS - 10TB kapasite</p>
            </div>
            <div className="bg-black/20 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-white/70">Yazılım Geliştirme</span>
                <span className="text-yellow-400">$200-500K</span>
              </div>
              <p className="text-xs text-white/50">Algoritma ve Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real World Example */}
      <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-5 border border-green-400/30">
        <h3 className="text-lg mb-3 flex items-center gap-2">
          <Globe className="size-5 text-green-400" />
          Dünya Örneği: Londra iBus Sistemi
        </h3>
        <p className="text-sm text-white/80 leading-relaxed">
          Londra'nın <span className="text-green-400">iBus sistemi</span>, gerçek zamanlı konum, hız ve 
          yolcu yoğunluğu verisiyle "otobüs kümelenmesi" problemini çözmektedir. İki araç çok yaklaştığında, 
          sistem otomatik olarak arkadaki araca "daha uzun dur" veya öndeki araca "bazı durakları atla" 
          talimatı vererek dengeyi sağlar. Bu, İETT'nin yoğun arterlerinde yaşanan "peş peşe gelen otobüsler" 
          problemine yazılım tabanlı bir çözümdür.
        </p>
      </div>
    </div>
  );
}
