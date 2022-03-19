!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-moda'),
       overlay      = document.querySelector('.js-overlay-moda'),
       closeButtons = document.querySelectorAll('.js-moda-close');
   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.moda[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click
   }); // end foreach
   closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         var parentmodal = this.closest('.moda');
         parentmodal.classList.remove('active');
         overlay.classList.remove('active');
      });
   }); // end foreach
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.moda.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);
    overlay.addEventListener('click', function() {
        document.querySelector('.moda.active').classList.remove('active');
        this.classList.remove('active');
    });
});