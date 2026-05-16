document.querySelectorAll('.yt-container').forEach(function(el) {
  el.addEventListener('click', function() {
    var id = el.dataset.id;
    el.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>';
    el.classList.add('yt-playing');
  });
});
