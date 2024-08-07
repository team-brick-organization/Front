declare module globalThis {
  type DaumPostcodeData = {
    zonecode: number
    address: string
    addressEnglish: string
    addressType: 'R' | 'J'
    userSelectedType: 'R' | 'J'
    noSelected: 'Y' | 'N'
    userLanguageType: 'K' | 'E'
    roadAddress: string
  }

  type DaumPostcodeSearchData = {
    q?: string
    count?: boolean
  }

  type DaumPostcodeOption = {
    onComplete?: (data: DaumPostcodeData) => void
  }

  type PostcodeOperator = {
    open: () => void
    embed: (wrap: Element, options: { q: string; autoClose: boolean }) => void
  }

  interface Window {
    daum: {
      Postcode: new (options?: DaumPostcodeOption) => PostcodeOperator
      postcode: {
        load: (fn: () => void) => void
      }
    }
  }
}
