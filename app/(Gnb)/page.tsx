import getSocials from '@/apis/getSocials'
import { MainPage } from '@/components'

async function Home() {
  try {
    const response = await getSocials({
      orderBy: 'popularity',
      offset: 0,
      limit: 7,
    })

    if (!response.ok) {
      return <MainPage />
    }

    const data = await response.json()

    if (!data) {
      return <MainPage />
    }

    return <MainPage socialsData={data.socials} />
  } catch (error) {
    return <MainPage />
  }
}

export default Home
