'use client'

import { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface IKakaoMapProps {
  lat: number
  lng: number
}

function KakaoMap({ lat, lng }: IKakaoMapProps) {
  const [map, setMap] = useState<kakao.maps.Map | null>(null)

  const markerSrc = '/images/svgs/mapMarker.svg'

  useEffect(() => {
    const setCenter = () => {
      if (window.kakao && window.kakao.maps && map) {
        const center = new window.kakao.maps.LatLng(lat, lng)
        map.setCenter(center)
      }
    }

    setCenter()

    window.addEventListener('resize', setCenter)

    return () => {
      window.removeEventListener('resize', setCenter)
    }
  }, [lat, lng, map])

  return (
    <Map
      className="h-336pxr w-full"
      center={{ lat, lng }}
      onCreate={(mapInstance) => {
        setMap(mapInstance)
      }}
    >
      <MapMarker
        position={{
          lat,
          lng,
        }}
        image={{
          src: markerSrc,
          size: {
            width: 24,
            height: 24,
          },
        }}
      />
    </Map>
  )
}

export default KakaoMap
