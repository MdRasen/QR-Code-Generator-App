// Project Name: QR Code Generator App
// Youtube: https://youtube.com/@devRasen
// Copyright: ©MdRasen

function qrGenerate() {
  let qrOutput = document.getElementById("qr-output");
  let qrImg = document.getElementById("qr-image");
  let inputText = document.getElementById("input-text").value;
  let btnDownload = document.getElementById("btn-download");

  if (inputText.length > 0) {
    qrOutput.classList.remove("hidden");
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=" +
      inputText;
    btnDownload.href =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
      inputText;
  }
}
