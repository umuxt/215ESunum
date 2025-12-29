import { useState, useEffect, useRef } from 'react';
import { Bus, Users, TrendingUp, Activity, Clock, AlertTriangle, CheckCircle, Play, Pause, MapPin } from 'lucide-react';

interface BusData {
  id: string;
  route: string;
  occupancy: number;
  status: 'normal' | 'crowded' | 'critical';
  waitTime: number;
  position: number; // 0-100 representing position on route
  lat: number;
  lng: number;
}

export function RealMapSimulation() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [passengerDemand, setPassengerDemand] = useState(65);
  const mapRef = useRef<any>(null);
  const mapInstanceRef = useRef<any>(null);
  const busMarkersRef = useRef<any[]>([]);
  
  // Real 500T route coordinates (Bağcılar - Aksaray line)
  const routeCoordinates = [
    [41.0392, 28.8567], // Bağcılar
    [41.0358, 28.8756], // Güngören
    [41.0156, 28.8892], // Merter
    [41.0089, 28.9145], // Zeytinburnu
    [41.0134, 28.9323], // Topkapı
    [41.0156, 28.9556], // Aksaray
  ];

  const stops = [
    { name: 'Bağcılar', lat: 41.0392, lng: 28.8567, position: 0 },
    { name: 'Güngören', lat: 41.0358, lng: 28.8756, position: 20 },
    { name: 'Merter', lat: 41.0156, lng: 28.8892, position: 40 },
    { name: 'Zeytinburnu', lat: 41.0089, lng: 28.9145, position: 60 },
    { name: 'Topkapı', lat: 41.0134, lng: 28.9323, position: 80 },
    { name: 'Aksaray', lat: 41.0156, lng: 28.9556, position: 100 },
  ];

  const [buses, setBuses] = useState<BusData[]>([
    { id: 'B1', route: '500T', occupancy: 45, status: 'normal', waitTime: 8, position: 10, lat: 41.0380, lng: 28.8645 },
    { id: 'B2', route: '500T', occupancy: 72, status: 'normal', waitTime: 12, position: 45, lat: 41.0122, lng: 28.9020 },
    { id: 'B3', route: '500T', occupancy: 88, status: 'crowded', waitTime: 15, position: 75, lat: 41.0110, lng: 28.9234 },
  ]);
  
  const [events, setEvents] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    avgOccupancy: 68,
    avgWaitTime: 11.6,
    satisfaction: 72,
  });

  // Initialize Leaflet map
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadLeaflet = async () => {
      // @ts-ignore
      const L = await import('leaflet@1.9.4');
      
      if (!mapRef.current || mapInstanceRef.current) return;

      // Create map
      const map = L.map(mapRef.current).setView([41.0200, 28.9000], 12);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Draw route line
      const routeLine = L.polyline(routeCoordinates, {
        color: '#3b82f6',
        weight: 5,
        opacity: 0.7,
      }).addTo(map);

      // Add stop markers
      stops.forEach(stop => {
        L.circleMarker([stop.lat, stop.lng], {
          radius: 8,
          fillColor: '#06b6d4',
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
        })
          .addTo(map)
          .bindPopup(`<b>${stop.name}</b><br>500T Durağı`);
      });

      mapInstanceRef.current = map;
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update bus positions on map
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === 'undefined') return;

    const updateBusMarkers = async () => {
      // @ts-ignore
      const L = await import('leaflet@1.9.4');

      // Remove old markers
      busMarkersRef.current.forEach(marker => marker.remove());
      busMarkersRef.current = [];

      // Add new markers
      buses.forEach(bus => {
        const color = 
          bus.status === 'critical' ? '#ef4444' :
          bus.status === 'crowded' ? '#f97316' : '#22c55e';

        const icon = L.divIcon({
          html: `
            <div style="position: relative;">
              <div style="
                background-color: ${color};
                border: 2px solid white;
                border-radius: 4px;
                width: 28px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
                color: white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              ">
                ${bus.id}
              </div>
              <div style="
                position: absolute;
                top: 22px;
                left: 50%;
                transform: translateX(-50%);
                background: ${color};
                color: white;
                padding: 2px 4px;
                border-radius: 3px;
                font-size: 9px;
                font-weight: 600;
                white-space: nowrap;
              ">
                ${Math.round(bus.occupancy)}%
              </div>
            </div>
          `,
          className: 'bus-marker',
          iconSize: [28, 40],
          iconAnchor: [14, 10],
        });

        const marker = L.marker([bus.lat, bus.lng], { icon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <b>${bus.id} - ${bus.route}</b><br>
            Doluluk: ${Math.round(bus.occupancy)}%<br>
            Bekleme: ${Math.round(bus.waitTime)} dk<br>
            Durum: ${bus.status === 'critical' ? 'Kritik' : bus.status === 'crowded' ? 'Kalabalık' : 'Normal'}
          `);

        busMarkersRef.current.push(marker);
      });
    };

    updateBusMarkers();
  }, [buses]);

  const getPositionCoordinates = (position: number) => {
    const totalSegments = routeCoordinates.length - 1;
    const segmentIndex = Math.floor((position / 100) * totalSegments);
    const segmentProgress = ((position / 100) * totalSegments) - segmentIndex;
    
    const nextIndex = Math.min(segmentIndex + 1, routeCoordinates.length - 1);
    const [lat1, lng1] = routeCoordinates[segmentIndex];
    const [lat2, lng2] = routeCoordinates[nextIndex];
    
    const lat = lat1 + (lat2 - lat1) * segmentProgress;
    const lng = lng1 + (lng2 - lng1) * segmentProgress;
    
    return { lat, lng };
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(t => t + 1);
      
      setPassengerDemand(prev => {
        const change = Math.random() * 20 - 10;
        return Math.max(30, Math.min(100, prev + change));
      });

      setBuses(prevBuses => {
        const updatedBuses = prevBuses.map(bus => {
          const occupancyChange = Math.random() * 15 - 5;
          let newOccupancy = Math.max(20, Math.min(100, bus.occupancy + occupancyChange));
          
          let status: 'normal' | 'crowded' | 'critical' = 'normal';
          if (newOccupancy >= 85) status = 'critical';
          else if (newOccupancy >= 70) status = 'crowded';

          const waitChange = Math.random() * 4 - 2;
          const newWaitTime = Math.max(3, Math.min(20, bus.waitTime + waitChange));

          const newPosition = (bus.position + 1.5) % 100;
          const { lat, lng } = getPositionCoordinates(newPosition);

          return {
            ...bus,
            occupancy: newOccupancy,
            status,
            waitTime: newWaitTime,
            position: newPosition,
            lat,
            lng,
          };
        });

        const criticalBuses = updatedBuses.filter(b => b.status === 'critical');
        if (criticalBuses.length > 0 && updatedBuses.length < 5 && Math.random() > 0.7) {
          const { lat, lng } = getPositionCoordinates(5);
          const newBus: BusData = {
            id: `B${updatedBuses.length + 1}`,
            route: '500T',
            occupancy: 25,
            status: 'normal',
            waitTime: 5,
            position: 5,
            lat,
            lng,
          };
          addEvent(`🚌 Ek sefer eklendi: ${newBus.id} - ${newBus.route} hattı`);
          return [...updatedBuses, newBus];
        }

        return updatedBuses;
      });

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
      { id: 'B1', route: '500T', occupancy: 45, status: 'normal', waitTime: 8, position: 10, lat: 41.0380, lng: 28.8645 },
      { id: 'B2', route: '500T', occupancy: 72, status: 'normal', waitTime: 12, position: 45, lat: 41.0122, lng: 28.9020 },
      { id: 'B3', route: '500T', occupancy: 88, status: 'crowded', waitTime: 15, position: 75, lat: 41.0110, lng: 28.9234 },
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
          <p className="text-blue-300">500T Hattı (Bağcılar-Aksaray) - Gerçek İstanbul Haritası</p>
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
        {/* Real Map Visualization */}
        <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <MapPin className="size-5 text-cyan-400" />
            500T Hattı - Gerçek İstanbul Haritası (OpenStreetMap)
          </h3>
          <div 
            ref={mapRef}
            className="rounded-lg border border-cyan-400/20 h-[400px] w-full"
            style={{ zIndex: 1 }}
          />
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
                  className="bg-black/20 rounded-lg p-2 text-xs text-white/80 border border-white/10"
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
          Aktif Otobüsler ({buses.length})
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
          Bu simülasyon, gerçek İstanbul haritası üzerinde 500T hattının (Bağcılar-Aksaray) gerçek 
          güzergahını gösterir. OpenStreetMap verisi kullanılarak otobüsların gerçek konumları, 
          doluluk durumları ve sistem olayları canlı olarak izlenir. %85'in üzerinde doluluk 
          tespit edildiğinde sistem otomatik olarak ek sefer ekler.
        </p>
      </div>
    </div>
  );
}
