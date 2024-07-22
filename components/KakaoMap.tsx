import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface IKakaoMapProps {
  lat: number
  lng: number
}

function KakaoMap({ lat, lng }: IKakaoMapProps) {
  const markerSrc = '/images/svgs/mapMarker.svg'
  return (
    <Map className="h-336pxr w-full" center={{ lat, lng }}>
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
