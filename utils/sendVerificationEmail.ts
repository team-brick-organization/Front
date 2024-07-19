import { notify } from '@/components/ToastMessageTrigger'
import emailjs from '@emailjs/browser'

async function sendVerificationEmail(
  name: string,
  email: string,
  verificationNumber: number,
) {
  try {
    const template = {
      userName: name,
      clientEmail: email,
      certificationNumber: verificationNumber,
    }

    const result = await emailjs.send(
      'service_ozt7pgs',
      'template_tt1911s',
      template,
      'AAlg370Dpl8P-srAe',
    )

    notify('이메일 전송 완료!')
    return result
  } catch (error) {
    notify(`전송 실패: ${error}`)

    throw error
  }
}

export default sendVerificationEmail
