netlifyIdentity.init();

netlifyIdentity.on('login', user => {
  window.location.href = '/blog.html'; // replace with your page URL
})
