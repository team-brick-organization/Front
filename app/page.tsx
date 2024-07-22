import { ImageViewer } from '@/components'
import mockImages from '@/components/ImageViewer/mockImages'

export default function Home() {
  return (
    <div className="">
      <ImageViewer images={mockImages} />
    </div>
  )
}
