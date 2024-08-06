#  [BRICK](https://brick-production.vercel.app/)

<div align="center">
  
[![banner](https://github.com/user-attachments/assets/eed5449e-a86c-42fa-b27d-06fe136a13ad)](https://brick-production.vercel.app/)



#### Brick은 사람들과의 새로운 연결을 통해 커뮤니티를 쌓아가는 모임 서비스입니다.  
#### 관계 속에서 느껴지는 벽을 깨고 공통 관심사의 사람들과 새로운 만남이 자유롭게 이루어지길 바랍니다.

</div>

</br>

## 목차

1. [기술스택](##기술스택)
2. [핵심기능](##핵심기능)
3. [트러블슈팅](##트러블슈팅)
4. [팀원](##팀원)
5. [라이센스](##라이센스)

</br>

## 기술스택

<div align="center">
  
![nextjs](https://github.com/user-attachments/assets/87aa0fe4-d153-4a16-a69d-5c200bd8675c)   



### 라이브러리



![title](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![title](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)  
![title](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![title](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![title](https://img.shields.io/badge/Airbnb-%23ff5a5f.svg?style=for-the-badge&logo=Airbnb&logoColor=white)   

### other
![title](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![title](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) ![title](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)   
   
</div>


</br>

## 핵심기능
#### 모임
- 모임생성 및 참여, 취소, 조회
   
#### Qna
- Qna생성 및 수정, 삭제, 조회


</br>

## 트러블슈팅

 ### CloudFlare Pages 배포 오류
     
   #### 문제
     
>동적 라우트 배포시 Node.JS Compatibility Error 라는 에러 발생
page.tsx에 export const runtime = ‘edge’, 적용 - 실패
     
     해결하지 못한채로 Vecel 배포로 배포 방식 변경
     
     



### eslint + prettier tailwind className 정렬 충돌 오류
  #### 문제
>tailwind로 className을 작성하고 저장 후 커밋을 하면 husky ⇒ lint stage ⇒ eslint 에서 lint 에러로 인한 커밋 불가 커밋을 하면 husky ⇒ lint stage ⇒ prettier 가 정렬을 하면 className이 정렬되어 eslint 규칙과 맞지 않아 lint 에러 발생 ⇒ 커밋 불가
    
  #### 해결
    eslintrc에서 extends에 prettier 속성을 맨 밑으로 내려 오버라이드 해줌
</br>



 ### 파일 대소문자 변경시 fileChange 오류
  #### 문제
>파일 대소문자 변경시 fileChange가 잡히지 않음
  #### 해결- 파일명 변경시 해결
    명령어: git mv

</br>


## 팀원


<div width="600px">
    

| 이름 | 역할 | GitHub |
| -------- | -------- | -------- |
| 이정윤 | FE | [GITHUB](https://github.com/lsc58461) |
| 김동규 | FE | [GITHUB](https://github.com/DongKyuK12) |
| 조욱희 | FE | [GITHUB](https://github.com/AshtonJo) |
| 김유정 | BE | [GITHUB](https://github.com/kimyu0218) |
| 허지원 | BE | [GITHUB](https://github.com/hunnypooh) |   
| 김예담 | DE | [rocketpunch](https://www.rocketpunch.com/@yedamn000504)|

</div>

</br>

