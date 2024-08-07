import { notify } from '@/components/ToastMessageTrigger'
import emailjs from '@emailjs/browser'

async function sendVerificationEmail(
  name: string,
  email: string,
  verificationNumber: number,
  isResend: boolean = false,
) {
  try {
    const template = {
      userName: name,
      clientEmail: email,
      certificationNumber: verificationNumber,
    }

    const serviceKey = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY
    const templateKey = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY

    if (!serviceKey || !templateKey || !publicKey) return

    await emailjs.send(serviceKey, templateKey, template, publicKey)
    if (!isResend) {
      notify('인증번호가 전송되었어요.')
    } else {
      notify('인증번호가 다시 전송되었어요.')
    }
  } catch (error) {
    notify(`전송 실패: ${error}`)

    throw error
  }
}

export default sendVerificationEmail
