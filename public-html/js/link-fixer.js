window.onload = function() {
  var active = document.getElementsByClassName('active-link')[0];
  var side = document.getElementById('sidebar');
  var rect = active.getBoundingClientRect();

  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  side.scrollTo({top:rect.top + side.scrollTop - (height/2), behavior: 'smooth'});




  var links = document.links;

  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      console.log(links[i]);
      links[i].target = '_blank';
    }
  }
};