window.addEventListener("resize", responsive);

function responsive() {
  const wScreen = window.screen.width;
  
  if( wScreen <= 574 || wScreen <= 991 ) {
    const portfolioRow2 = document.querySelector("section#portfolio .row:nth-child(2)");
    const sertificateRow2 = document.querySelector("section#sertificate .row:nth-child(2)");
    const ulNav = document.getElementById('navbarNav');

    portfolioRow2.classList.add('justify-content-center');
    sertificateRow2.classList.add('justify-content-center');
    ulNav.classList.add('mt-4');
  } else  {
    const portfolioRow2 = document.querySelector("section#portfolio .row:nth-child(2)");
    const sertificateRow2 = document.querySelector("section#sertificate .row:nth-child(2)");
    const ulNav = document.getElementById('navbarNav');

    portfolioRow2.classList.remove('justify-content-center');
    sertificateRow2.classList.remove('justify-content-center');
    ulNav.classList.remove('mt-4');
  }
}

responsive();
