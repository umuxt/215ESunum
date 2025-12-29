import { Bus, Users, MapPin } from 'lucide-react';

export function IntroSlide() {
  return (
    <div className="text-white space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-4">
          <Bus className="size-10 text-blue-400" />
        </div>
        <h2 className="text-4xl">
          Çok Kanallı Veri Toplama ve İşleme Sistemi
        </h2>
        <p className="text-xl text-blue-300">
          İstanbul Toplu Taşıma Ağı (İETT) Sistem Analizi
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Users className="size-8 text-blue-400 mb-3" />
          <h3 className="text-xl mb-2">16 Milyon+</h3>
          <p className="text-white/70">Nüfus</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <Bus className="size-8 text-green-400 mb-3" />
          <h3 className="text-xl mb-2">30.3 Milyon</h3>
          <p className="text-white/70">Günlük Yolculuk</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <MapPin className="size-8 text-purple-400 mb-3" />
          <h3 className="text-xl mb-2">2 Kıta</h3>
          <p className="text-white/70">Coğrafi Yapı</p>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
        <h3 className="text-xl mb-3">Proje Ekibi</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <p className="text-white/80">• Enes Yumurtacı (070250725)</p>
          <p className="text-white/80">• Mustafa Anıl Öz (507251168)</p>
          <p className="text-white/80">• Özgür Özbey (507251264)</p>
          <p className="text-white/80">• Sude Erva Apak (507251258)</p>
          <p className="text-white/80">• Umut Yalçın (507251154)</p>
          <p className="text-white/80">• Yağız Ali Ersöz (507241230)</p>
        </div>
      </div>
    </div>
  );
}
