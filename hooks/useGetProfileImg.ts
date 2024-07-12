// import { useEffect, useState } from 'react'

// /**
//  * GNB 유저정보를 가져오는 커스텀훅
//  * @todo API 주소 바꿔주기, 데이터타입 정해주기
//  */

// function useGetProfileImg() {
//   const [userName, setUserName] = useState<string | undefined>(undefined)
//   const [profileImg, setProfileImg] = useState<string | undefined>(undefined)

//   useEffect(() => {
//     fetch('https://api.github.com/users/DongKyuK12')
//       .then((res) => res.json())
//       .then((data: any) => {
//         setUserName(data.login)
//         setProfileImg(data.avatar_url)
//         console.log(data)
//       })
//   }, [])

//   return { userName, profileImg }
// }

// export default useGetProfileImg
