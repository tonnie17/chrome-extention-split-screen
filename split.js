var body = document.querySelector('body');
var url = window.location.href;
var leftFrame = '<iframe id="left" src="" frameborder="0" style="width:49%;height:100%"></iframe>'
var rightFrame = '<iframe id="right" src="" frameborder="0" style="width:49%;height:100%"></iframe>'
body.innerHTML = '';
body.insertAdjacentHTML('beforeend', leftFrame);
body.insertAdjacentHTML('beforeend', rightFrame);
var lf = document.getElementById('left');
var rf = document.getElementById('right');
lf.setAttribute('src', url);
rf.setAttribute('src', url);
body.style.height = window.innerHeight + 'px';
