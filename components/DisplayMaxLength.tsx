interface IDisplayMaxLengthProps {
  currentLength: number
  maxLength: number
}

function DisplayMaxLength({
  currentLength,
  maxLength,
}: IDisplayMaxLengthProps) {
  return (
    <span className="inline-block w-full text-end text-gray-06 font-caption-02">
      {currentLength}/{maxLength}
    </span>
  )
}

export default DisplayMaxLength
