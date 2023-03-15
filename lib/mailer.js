import emailjs from '@emailjs/browser'

export default async function sendMail(data) {
  if (data.name && data.email && data.subject && data.message) {
    const { data:params } = await fetch('/api/mail-params', {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((result) => result.json())  
    
    try {
      const result = await emailjs.send(params.service, params.template, { "from_name": data.name, "reply_to": data.email, subject: data.subject, message: data.message }, params.key)
      if (result.text === 'OK') {
        return 'success'
      }
    } catch (error) {
      console.log(error)
    }
  }
  return 'error'
}