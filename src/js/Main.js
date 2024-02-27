
var Main = {

    init: function () {
        var weatherApp = new WeatherApp();
        Main.handleNavigation();
        
    },

    handleNavigation: function () {
      var navUl = document.getElementsByTagName('nav')[0];
        navUl.addEventListener('click', Main.handleNavClick);
    },

    handleNavClick: function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            event.preventDefault();

            var divs = document.getElementsByClassName('thisPage');
            for (var i = 0; i < divs.length; i++) {
               divs[i].style.display = 'none';
            }

            var id = target.getAttribute('href').slice(1);
            var section = document.getElementById(id);
            section.style.display = 'flex';

        
          
        }
    },

}

window.addEventListener('load', Main.init);