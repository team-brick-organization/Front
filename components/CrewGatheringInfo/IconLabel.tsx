import Image from 'next/image'

interface IIconLabelProps {
  src: string
  children: string
}

function IconLabel({ src, children }: IIconLabelProps) {
  return (
    <div className="flex items-center gap-4pxr">
      <Image src={src} width={17} height={17} alt={children} />
      <p className="text-[#9A9B9D] font-body-01">{children}</p>
    </div>
  )
}

export default IconLabel
