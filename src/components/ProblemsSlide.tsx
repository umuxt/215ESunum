import { AlertCircle, Users, Clock } from 'lucide-react';

export function ProblemsSlide() {
  return (
    <div className="text-white space-y-6">
      <h2 className="text-3xl mb-6">Temel Problemler</h2>

      <div className="space-y-6">
        {/* Problem 1 */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-400/30">
          <div className="flex items-start gap-4">
            <div className="bg-red-500/30 rounded-full p-3 mt-1">
              <AlertCircle className="size-7 text-red-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-3">Problem 1: Hizmet Güvenilirliği Eksikliği</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Karma trafik koşulları ve kontrol eksikliği nedeniyle otobüsler genellikle "kümeler" 
                halinde gelir (aynı anda iki veya üç otobüs) ve ardından uzun boşluklar oluşur.
              </p>
              
              <div className="bg-black/20 rounded-lg p-4 space-y-2">
                <h4 className="text-lg text-red-300">Etkileri:</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <Clock className="size-5 text-red-300 mt-0.5 flex-shrink-0" />
                    <span>Tarifeden sapma ve belirsizlik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="size-5 text-red-300 mt-0.5 flex-shrink-0" />
                    <span>Yolcu bekleme sürelerinde artış</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="size-5 text-red-300 mt-0.5 flex-shrink-0" />
                    <span>Geç varış → Daha fazla yolcu birikimi → Daha uzun biniş süresi → Daha da gecikmeler (Pozitif geri besleme döngüsü)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-6 border border-orange-400/30">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500/30 rounded-full p-3 mt-1">
              <Users className="size-7 text-orange-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-3">Problem 2: Yoğun Saatlerde Aşırı Kalabalık</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Popüler hatlarda (örn. Metrobüs veya ana arterler) yolcu talebi, 07:00-09:00 ve 
                17:00-19:00 saatleri arasında atanan otobüslerin kapasitesini aşar.
              </p>
              
              <div className="bg-black/20 rounded-lg p-4 space-y-2">
                <h4 className="text-lg text-orange-300">Etkileri:</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <Users className="size-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span>Konfor azalması ve güvenlik riskleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="size-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span>Yolcuların otobüslere binememesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="size-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span>Yolcu memnuniyetinde ciddi düşüş</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
