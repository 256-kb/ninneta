/**
 * Ninneta.cc — Menu & Interactions
 */

// Switch QR Code between Contact and Canal
function switchQr(type) {
  const qrImg = document.getElementById('activeQrImg');
  const btnContact = document.getElementById('btnQrContact');
  const btnCanal = document.getElementById('btnQrCanal');

  if (!qrImg || !btnContact || !btnCanal) return;

  if (type === 'contact') {
    qrImg.src = 'qr-contact.svg';
    qrImg.alt = 'QR Code Telegram @ninnetacards';
    btnContact.classList.add('active');
    btnCanal.classList.remove('active');
  } else if (type === 'canal') {
    qrImg.src = 'qr-canal.svg';
    qrImg.alt = 'QR Code Canal NINNETACANAL';
    btnCanal.classList.add('active');
    btnContact.classList.remove('active');
  }
}

// Window load safety
window.switchQr = switchQr;
