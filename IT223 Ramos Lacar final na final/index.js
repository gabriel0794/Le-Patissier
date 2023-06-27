document.addEventListener('DOMContentLoaded', () => {
  const shopNowButton = document.querySelector('button');
  shopNowButton.addEventListener('click', () => {
    console.log('Button clicked!');
  });

  const navbarLinks = document.querySelectorAll('.navbar li a');
  let currentLink = null;

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (currentLink) {
        currentLink.style.color = 'black';
      }
      link.style.color = 'black';
      currentLink = link;
    });
  });

  function addClickEventListeners(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup(element);
      });
    });
  }

  function showPopup(product) {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const productImg = product.querySelector('img');
    const productImgSrc = productImg.getAttribute('src');
    const productText = product.querySelector('p').textContent;
    const productPrice = product.querySelector('h4').textContent;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const imageElement = document.createElement('img');
    imageElement.src = productImgSrc;
    imageElement.alt = productText;
    imageContainer.appendChild(imageElement);

    popupContent.innerHTML = `
      <h3>${productText}</h3>
      <p>${productPrice}</p>
      <button class="buy-btn">Buy Now</button>
      <button class="cancel-btn">Cancel</button>
    `;

    popupContent.prepend(imageContainer);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    const buyButton = popup.querySelector('.buy-btn');
    const cancelButton = popup.querySelector('.cancel-btn');

    function buyNow() {
      console.log('You clicked Buy Now!');
      cleanupPopup();
      buyButton.removeEventListener('click', buyNow);
      cancelButton.removeEventListener('click', cancel);
    }

    function cancel() {
      console.log('You clicked Cancel!');
      cleanupPopup();
      buyButton.removeEventListener('click', buyNow);
      cancelButton.removeEventListener('click', cancel);
    }

    buyButton.addEventListener('click', buyNow);
    cancelButton.addEventListener('click', cancel);
  }

  function cleanupPopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
      document.body.removeChild(popup);
    }
  }

  addClickEventListeners('.box');
  
});

$(window).ready(function(){
  $('.menu-toggle').click(function(){
    console.log("Menu toggle clicked");
    $('.main-nav').toggleClass('main-nav-open', 500);
    $(this).toggleClass('open');
  });
});



