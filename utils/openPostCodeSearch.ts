function openPostCodeSearch(onComplete: (data: DaumPostcodeData) => void) {
  new window.daum.Postcode({ onComplete }).open()
}

export default openPostCodeSearch
