interface ISocialDescriptionProps {
  children: string
}

function SocialDescription({ children }: ISocialDescriptionProps) {
  return (
    <>
      <h2 className="text-gray-10 font-title-04">소셜 소개</h2>
      <p className="text-gray-10 font-body-02">{children}</p>
    </>
  )
}

export default SocialDescription
