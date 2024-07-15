import { KakaoMap } from './index'

interface ILocationMapProps {
  location: string
  lat: number
  lng: number
}

function LocationMap({ location, lat, lng }: ILocationMapProps) {
  return (
    <>
      <h2 className="font-title-04">위치</h2>
      <p className="mt-8pxr text-[#5E5E60] font-body-02">{location}</p>
      <div className="mt-24pxr w-full">
        <KakaoMap lat={lat} lng={lng} />
      </div>
    </>
  )
}

export default LocationMap
