

document.addEventListener('DOMContentLoaded', function() {
    const htmlElem =  `<section class="app-section app-section--image-join">
    <h2 class="app-title">Join Our Program</h2>
    <h3 class="app-subtitle">Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.<br /></h3>
    
    <div class="email-subscribe-container">
      <input type="email" id="email" name="email" placeholder="Email">
      <button class="app-section__button app-section__button--subscribe">SUBSCRIBE</button>
    </div>
    </section>
    `;
  
  const footer = document.querySelector('footer');
  footer.insertAdjacentHTML('beforebegin', htmlElem);

  const submitbutton = document.querySelector('button.app-section__button--subscribe'); 
  submitbutton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(document.querySelector("#email").value); 
  });
});