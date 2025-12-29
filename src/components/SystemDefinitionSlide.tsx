import { Network, Cpu, Users, Info } from 'lucide-react';

export function SystemDefinitionSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Sistem Tanımı</h2>

      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-white/20 mb-6">
        <h3 className="text-xl mb-3 flex items-center gap-2">
          <Info className="size-6 text-blue-400" />
          Sosyo-Teknik Sistem
        </h3>
        <p className="text-white/80 leading-relaxed">
          İETT Ağı, yolcuları şehrin bir ucundan diğerine organize ve bağlantılı bileşenler kullanarak 
          taşımayı amaçlayan büyük bir sistemdir. Sadece otobüslerden ibaret değil; fiziksel, beşeri ve 
          bilgisel bileşenlerin sürekli etkileşim içinde olduğu karmaşık bir yapıdır.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-lg p-5 border border-white/10">
          <Network className="size-7 text-purple-400 mb-3" />
          <h4 className="mb-2">Fiziksel Bileşenler</h4>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Otobüsler</li>
            <li>• Duraklar</li>
            <li>• Yollar</li>
            <li>• Trafik sinyalleri</li>
          </ul>
        </div>

        <div className="bg-white/5 rounded-lg p-5 border border-white/10">
          <Users className="size-7 text-green-400 mb-3" />
          <h4 className="mb-2">Beşeri Bileşenler</h4>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Sürücüler</li>
            <li>• Yolcular</li>
            <li>• Sevk memurları</li>
            <li>• Bakım ekibi</li>
          </ul>
        </div>

        <div className="bg-white/5 rounded-lg p-5 border border-white/10">
          <Cpu className="size-7 text-blue-400 mb-3" />
          <h4 className="mb-2">Bilgisel Bileşenler</h4>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Zaman çizelgeleri</li>
            <li>• GPS takip sistemi</li>
            <li>• İstanbulkart</li>
            <li>• Mobil uygulamalar</li>
          </ul>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-5 border border-white/10 mt-6">
        <h4 className="mb-3">Sistem Amacı</h4>
        <p className="text-white/80">
          İstanbul nüfusuna <span className="text-blue-400">erişilebilir, güvenli, verimli ve uygun 
          fiyatlı</span> mobilite sağlamak. Taşınan yolcu sayısını maksimize ederken, bekleme sürelerini 
          ve operasyonel maliyetleri minimize etmek.
        </p>
      </div>
    </div>
  );
}
