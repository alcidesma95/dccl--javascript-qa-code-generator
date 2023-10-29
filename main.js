
const urlRegex = /^(http|https):\/\/[^ "]+$/
const urlInput= document.getElementById('url')
const createButtom = document.getElementById('create')

createButtom.addEventListener('click', createQR)

function createQR() {
  const url = urlInput.value.trim()
  if (!urlRegex.test(url)) {
    urlInput.parentNode.insertBefore(
      createError("* url format is not correct"),
      urlInput.nextSibling
    );
    return
    }
    new QRCode(document.getElementById("qrcode"), url);
}
