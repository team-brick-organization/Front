import Image from 'next/image'

interface IIconLabelProps {
  src: string
  children: string
}

function IconLabel({ src, children }: IIconLabelProps) {
  return (
    <div className="flex items-center gap-4pxr">
      <Image src={src} width={20} height={20} alt={children} />
      <p className="text-gray-06 font-body-02">{children}</p>
    </div>
  )
}

export default IconLabel
