// Inserts GTM noscript iframe and common header/menu into the page body.
(function(){
  const head = `<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TTZVFKVN"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->`;

  const header = `
  <header class="site-header">
    <div class="container">
      <a class="logo" href="index.html">TestWA</a>
      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>`;

  // Insert noscript immediately after opening body
  if (document.body) {
    document.body.insertAdjacentHTML('afterbegin', head + header);
  } else {
    document.addEventListener('DOMContentLoaded', function(){
      document.body.insertAdjacentHTML('afterbegin', head + header);
    });
  }
})();
