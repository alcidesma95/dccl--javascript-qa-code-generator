
const urlRegex = /^(http|https):\/\/[^ "]+$/
const urlInput= document.getElementById('url')
const createButtom = document.getElementById('create')


const downloadButtom = document.getElementById('download')
const shareButtom = document.getElementById('share')
const form = document.querySelector('form')
const actions = document.getElementById('actions')
let url


let generated = false
createButtom.addEventListener('click', createQR)

function createQR() {
  url  = urlInput.value.trim()
  if (!urlRegex.test(url)) {
    urlInput.parentNode.insertBefore(
      createError("* url format is not correct"),
      urlInput.nextSibling
    );
    return
    }
    const container = document.getElementById("qrcode")
    if(!generated)
    new QRCode(container, url);
    container.querySelector('img').setAttribute('id', 'qr_image')
    form.style.display='none'
    const logo = document.getElementById('logo')
    logo.classList.add('logo')
    container.style.display='flex'
    actions.classList.replace('hidden', 'active')
    generated = true
}

function createError(text) {
  const error = document.createElement("span");
  error.innerHTML = text;
  error.classList.add("error");
  return error;
}


downloadButtom.addEventListener('click', downloadQR)

function downloadQR() {
  const img = document.getElementById('qr_image')
  const url = img.src
  const a = document.createElement('a')
  a.href = url
  a.download = 'qrcode.png'
  a.click()
}

shareButtom.addEventListener('click',shareUrl)

function shareUrl (){
  if(url){
    navigator.clipboard.writeText(url)
    .then(() => {
      alert('✅ url copied to clipboard')
    })
    .catch(err => {   
      alert('❌ url copied to clipboard')
    })
  }
}

