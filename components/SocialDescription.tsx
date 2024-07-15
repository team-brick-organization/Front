interface ISocialDescriptionProps {
  children: string
}

function SocialDescription({ children }: ISocialDescriptionProps) {
  return (
    <>
      <h2 className="font-title-04">소셜 소개</h2>
      <p className="font-body-02">{children}</p>
    </>
  )
}

export default SocialDescription
