interface IDisplayMaxLengthProps {
  currentLength: number
  maxLength: number
}

function DisplayMaxLength({
  currentLength,
  maxLength,
}: IDisplayMaxLengthProps) {
  return (
    <p className="text-end text-gray-06 font-caption-02">
      {currentLength}/{maxLength}
    </p>
  )
}

export default DisplayMaxLength
