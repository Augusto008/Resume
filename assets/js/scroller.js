// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//         e.preventDefault();
//         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
  var scrollers = document.querySelectorAll('a[href*="#"]');
  scrollers.forEach(function(scroller) {
      scroller.addEventListener('click', function(event) {
          event.preventDefault();

          var target = this.getAttribute('href').substring(1);
          var element = document.getElementById(target);

          if (element) {
              var goTop = element.offsetTop;
              var duration = 500;
              var start;
              
              function animateScroll(timestamp) {
                  if (!start) start = timestamp;
                  var progress = timestamp - start;
                  var increment = progress / duration * goTop;

                  document.documentElement.scrollTop = document.body.scrollTop = increment;

                  if (progress < duration) {
                      requestAnimationFrame(animateScroll);
                  }
              }

              requestAnimationFrame(animateScroll);
          }
      });
  });
});