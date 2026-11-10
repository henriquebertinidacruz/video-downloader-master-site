// Shared bits: store link, support e-mail, year
document.querySelectorAll('.js-store').forEach(a => { a.href = window.VDM_STORE; });
if (window.VDM_SUPPORT) {
  document.querySelectorAll('.js-support').forEach(a => { a.href = 'mailto:' + window.VDM_SUPPORT; a.hidden = false; });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
