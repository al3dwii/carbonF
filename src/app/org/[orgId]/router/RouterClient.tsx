'use client'

import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const MapContainer = dynamic(
  () => import('react-leaflet').then(m => m.MapContainer),
  { ssr: false }
)

export default function RouterClient({ orgId }:{orgId:string}) {
  return <MapContainer center={[0,0]} zoom={1} />
}
