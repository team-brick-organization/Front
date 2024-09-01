import Link from 'next/link' // Next.js를 사용하는 경우

interface IAuthNavigationProps {
  isSignUp?: boolean
}

function AuthNavigation({ isSignUp }: IAuthNavigationProps) {
  return (
    <div className="text-center text-gray-06 font-body-02">
      {isSignUp ? '이미 회원이신가요?' : '아직 브릭 회원이 아닌가요?'}
      <Link href={isSignUp ? '/signin' : '/signup'}>
        <span className="pl-8pxr text-gray-10 underline underline-offset-2">
          {isSignUp ? '로그인' : '회원가입'}
        </span>
      </Link>
    </div>
  )
}

export default AuthNavigation
