import { useState, useEffect } from 'react';
import { Bus, Users, TrendingUp, TrendingDown, Activity, Clock, AlertTriangle, CheckCircle, Play, Pause, MapPin } from 'lucide-react';

interface BusData {
  id: string;
  route: string;
  occupancy: number;
  status: 'normal' | 'crowded' | 'critical';
  waitTime: number;
  position: number; // 0-100 representing position on route
}

export function SimulationSlide() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [passengerDemand, setPassengerDemand] = useState(65);
  const [buses, setBuses] = useState<BusData[]>([
    { id: 'B1', route: '500T', occupancy: 45, status: 'normal', waitTime: 8, position: 10 },
    { id: 'B2', route: '500T', occupancy: 72, status: 'normal', waitTime: 12, position: 45 },
    { id: 'B3', route: '500T', occupancy: 88, status: 'crowded', waitTime: 15, position: 75 },
  ]);
  const [events, setEvents] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    avgOccupancy: 68,
    avgWaitTime: 11.6,
    satisfaction: 72,
  });

  // 500T route stops
  const stops = [
    { name: 'Bağcılar', position: 0 },
    { name: 'Güngören', position: 20 },
    { name: 'Merter', position: 40 },
    { name: 'Zeytinburnu', position: 60 },
    { name: 'Topkapı', position: 80 },
    { name: 'Aksaray', position: 100 },
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(t => t + 1);
      
      // Simulate demand fluctuation
      setPassengerDemand(prev => {
        const change = Math.random() * 20 - 10;
        const newDemand = Math.max(30, Math.min(100, prev + change));
        return newDemand;
      });

      // Update buses
      setBuses(prevBuses => {
        const updatedBuses = prevBuses.map(bus => {
          const occupancyChange = Math.random() * 15 - 5;
          let newOccupancy = Math.max(20, Math.min(100, bus.occupancy + occupancyChange));
          
          let status: 'normal' | 'crowded' | 'critical' = 'normal';
          if (newOccupancy >= 85) status = 'critical';
          else if (newOccupancy >= 70) status = 'crowded';

          const waitChange = Math.random() * 4 - 2;
          const newWaitTime = Math.max(3, Math.min(20, bus.waitTime + waitChange));

          // Update position (move bus along route)
          const newPosition = (bus.position + 2) % 100;

          return {
            ...bus,
            occupancy: newOccupancy,
            status,
            waitTime: newWaitTime,
            position: newPosition,
          };
        });

        // Check if we need to add extra bus
        const criticalBuses = updatedBuses.filter(b => b.status === 'critical');
        if (criticalBuses.length > 0 && updatedBuses.length < 5 && Math.random() > 0.7) {
          const newBus: BusData = {
            id: `B${updatedBuses.length + 1}`,
            route: '500T',
            occupancy: 25,
            status: 'normal',
            waitTime: 5,
            position: 5,
          };
          addEvent(`🚌 Ek sefer eklendi: ${newBus.id} - ${newBus.route} hattı`);
          return [...updatedBuses, newBus];
        }

        return updatedBuses;
      });

      // Update metrics
      setMetrics(prev => {
        const avgOcc = buses.reduce((sum, b) => sum + b.occupancy, 0) / buses.length;
        const avgWait = buses.reduce((sum, b) => sum + b.waitTime, 0) / buses.length;
        const satisfaction = Math.max(40, Math.min(95, 100 - avgOcc * 0.5 - avgWait * 2));

        return {
          avgOccupancy: avgOcc,
          avgWaitTime: avgWait,
          satisfaction: satisfaction,
        };
      });

    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning, buses]);

  const addEvent = (event: string) => {
    setEvents(prev => [event, ...prev].slice(0, 5));
  };

  useEffect(() => {
    if (passengerDemand > 85) {
      addEvent(`⚠️ Yüksek talep tespit edildi: %${Math.round(passengerDemand)}`);
    }
  }, [Math.floor(passengerDemand / 10)]);

  const toggleSimulation = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      addEvent('✅ Simülasyon başlatıldı');
    }
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setTime(0);
    setPassengerDemand(65);
    setBuses([
      { id: 'B1', route: '500T', occupancy: 45, status: 'normal', waitTime: 8, position: 10 },
      { id: 'B2', route: '500T', occupancy: 72, status: 'normal', waitTime: 12, position: 45 },
      { id: 'B3', route: '500T', occupancy: 88, status: 'crowded', waitTime: 15, position: 75 },
    ]);
    setEvents(['🔄 Simülasyon sıfırlandı']);
    setMetrics({
      avgOccupancy: 68,
      avgWaitTime: 11.6,
      satisfaction: 72,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-400/40';
      case 'crowded': return 'text-orange-400 bg-orange-500/20 border-orange-400/40';
      default: return 'text-green-400 bg-green-500/20 border-green-400/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="size-4" />;
      case 'crowded': return <TrendingUp className="size-4" />;
      default: return <CheckCircle className="size-4" />;
    }
  };

  return (
    <div className="text-white space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl mb-2">Canlı Simülasyon: Dinamik Çizelgeleme</h2>
          <p className="text-blue-300">500T Hattı - Gerçek zamanlı sistem davranışı</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSimulation}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              isRunning 
                ? 'bg-orange-600 hover:bg-orange-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isRunning ? <Pause className="size-5" /> : <Play className="size-5" />}
            {isRunning ? 'Durdur' : 'Başlat'}
          </button>
          <button
            onClick={resetSimulation}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
          >
            Sıfırla
          </button>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30">
          <div className="flex items-center justify-between mb-2">
            <Activity className="size-5 text-blue-400" />
            <span className="text-2xl">{Math.round(passengerDemand)}%</span>
          </div>
          <p className="text-sm text-white/70">Yolcu Talebi</p>
        </div>

        <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-purple-400/30">
          <div className="flex items-center justify-between mb-2">
            <Users className="size-5 text-purple-400" />
            <span className="text-2xl">{Math.round(metrics.avgOccupancy)}%</span>
          </div>
          <p className="text-sm text-white/70">Ort. Doluluk</p>
        </div>

        <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg p-3 border border-orange-400/30">
          <div className="flex items-center justify-between mb-2">
            <Clock className="size-5 text-orange-400" />
            <span className="text-2xl">{metrics.avgWaitTime.toFixed(1)}dk</span>
          </div>
          <p className="text-sm text-white/70">Ort. Bekleme</p>
        </div>

        <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="size-5 text-green-400" />
            <span className="text-2xl">{Math.round(metrics.satisfaction)}%</span>
          </div>
          <p className="text-sm text-white/70">Memnuniyet</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Map Visualization */}
        <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <MapPin className="size-5 text-cyan-400" />
            500T Hattı - Canlı Görünüm
          </h3>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-cyan-400/20 relative h-[400px]">
            {/* Simplified Istanbul map background */}
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {/* Route line */}
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              
              {/* Main route path - curved line from west to east */}
              <path
                d="M 50 200 Q 200 180, 350 190 T 750 200"
                stroke="url(#routeGradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Stops */}
              {stops.map((stop, idx) => {
                const x = 50 + (stop.position / 100) * 700;
                const y = 200 + Math.sin((stop.position / 100) * Math.PI) * 10;
                
                return (
                  <g key={stop.name}>
                    {/* Stop circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill="#1e293b"
                      stroke="#06b6d4"
                      strokeWidth="3"
                    />
                    {/* Stop name */}
                    <text
                      x={x}
                      y={y + 30}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="12"
                      fontWeight="500"
                    >
                      {stop.name}
                    </text>
                  </g>
                );
              })}
              
              {/* Buses on route */}
              {buses.map((bus) => {
                const x = 50 + (bus.position / 100) * 700;
                const y = 200 + Math.sin((bus.position / 100) * Math.PI) * 10 - 40;
                
                const busColor = 
                  bus.status === 'critical' ? '#ef4444' :
                  bus.status === 'crowded' ? '#f97316' : '#22c55e';
                
                return (
                  <g key={bus.id} className="transition-all duration-500">
                    {/* Bus icon */}
                    <rect
                      x={x - 12}
                      y={y - 8}
                      width="24"
                      height="16"
                      rx="3"
                      fill={busColor}
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <rect
                      x={x - 8}
                      y={y - 4}
                      width="6"
                      height="6"
                      fill="#fff"
                      opacity="0.8"
                    />
                    <rect
                      x={x + 2}
                      y={y - 4}
                      width="6"
                      height="6"
                      fill="#fff"
                      opacity="0.8"
                    />
                    
                    {/* Bus ID label */}
                    <text
                      x={x}
                      y={y - 15}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {bus.id}
                    </text>
                    
                    {/* Occupancy indicator */}
                    <text
                      x={x}
                      y={y + 25}
                      textAnchor="middle"
                      fill={busColor}
                      fontSize="10"
                      fontWeight="600"
                    >
                      {Math.round(bus.occupancy)}%
                    </text>
                    
                    {/* Connection line to route */}
                    <line
                      x1={x}
                      y1={y + 8}
                      x2={x}
                      y2={200 + Math.sin((bus.position / 100) * Math.PI) * 10 - 15}
                      stroke={busColor}
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      opacity="0.5"
                    />
                  </g>
                );
              })}
              
              {/* Legend */}
              <g transform="translate(650, 350)">
                <rect x="0" y="0" width="12" height="12" rx="2" fill="#22c55e" />
                <text x="18" y="10" fill="#94a3b8" fontSize="10">Normal</text>
                
                <rect x="70" y="0" width="12" height="12" rx="2" fill="#f97316" />
                <text x="88" y="10" fill="#94a3b8" fontSize="10">Kalabalık</text>
                
                <rect x="150" y="0" width="12" height="12" rx="2" fill="#ef4444" />
                <text x="168" y="10" fill="#94a3b8" fontSize="10">Kritik</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Events Log */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h3 className="text-lg mb-3 flex items-center gap-2">
            <Activity className="size-5 text-yellow-400" />
            Sistem Olayları
          </h3>
          <div className="space-y-2 max-h-[340px] overflow-y-auto">
            {events.length === 0 ? (
              <p className="text-white/50 text-sm text-center py-8">
                Simülasyonu başlatın...
              </p>
            ) : (
              events.map((event, idx) => (
                <div 
                  key={idx}
                  className="bg-black/20 rounded-lg p-2 text-xs text-white/80 border border-white/10 animate-fadeIn"
                >
                  {event}
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <h4 className="text-sm mb-2 text-white/70">Algoritma Durumu:</h4>
            <div className="bg-black/20 rounded-lg p-2 text-sm">
              {isRunning ? (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs">Aktif - Talep izleniyor</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-gray-400 text-xs">Bekleme modunda</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Active Buses Panel */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-lg mb-3 flex items-center gap-2">
          <Bus className="size-5 text-cyan-400" />
          Aktif Otobusler ({buses.length})
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {buses.map(bus => (
            <div 
              key={bus.id} 
              className={`rounded-lg p-3 border transition-all ${getStatusColor(bus.status)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Bus className="size-4" />
                  <span className="font-bold">{bus.id}</span>
                </div>
                {getStatusIcon(bus.status)}
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/60">Doluluk:</span>
                  <span>{Math.round(bus.occupancy)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Bekleme:</span>
                  <span>{Math.round(bus.waitTime)}dk</span>
                </div>
              </div>
              <div className="mt-2 bg-black/20 rounded-full h-1.5 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    bus.status === 'critical' ? 'bg-red-400' : 
                    bus.status === 'crowded' ? 'bg-orange-400' : 'bg-green-400'
                  }`}
                  style={{ width: `${bus.occupancy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-3 border border-cyan-400/30">
        <h4 className="text-sm mb-1 text-cyan-300">Simülasyon Hakkında:</h4>
        <p className="text-xs text-white/70 leading-relaxed">
          Bu simülasyon, 500T hattında (Bağcılar - Aksaray) Dinamik Talep Bazlı Çizelgeleme Sisteminin 
          gerçek zamanlı davranışını gösterir. Harita üzerinde otobüsların konumunu, doluluk durumunu 
          ve sistem olaylarını izleyebilirsiniz. %85'in üzerinde doluluk tespit edildiğinde otomatik 
          olarak ek sefer eklenir.
        </p>
      </div>
    </div>
  );
}