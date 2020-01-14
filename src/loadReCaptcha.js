const loadReCaptcha = siteKey => {
  const script = document.createElement('script')

  script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${siteKey}`

  document.body.appendChild(script)
}

export default loadReCaptcha
