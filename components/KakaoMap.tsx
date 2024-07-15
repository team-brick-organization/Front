import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface IKakaoMapProps {
  lat: number
  lng: number
}

function KakaoMap({ lat, lng }: IKakaoMapProps) {
  return (
    <Map className="h-336pxr w-full" center={{ lat, lng }}>
      <MapMarker
        position={{
          lat,
          lng,
        }}
      />
    </Map>
  )
}

export default KakaoMap
