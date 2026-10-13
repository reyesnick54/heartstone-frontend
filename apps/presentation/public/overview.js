(function(){
  var secs=[].slice.call(document.querySelectorAll('main section'));
  var links=[].slice.call(document.querySelectorAll('.top nav a'));
  function current(){
    var y=window.scrollY+90,c=0;
    secs.forEach(function(s,i){if(s.offsetTop<=y)c=i;});
    return c;
  }
  function mark(){
    var id=secs[current()].id;
    links.forEach(function(a){
      var on=a.getAttribute('href')==='#'+id;
      a.classList.toggle('on',on);
      if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll',mark,{passive:true});mark();
  document.addEventListener('keydown',function(e){
    if(e.target.closest&&e.target.closest('input,textarea,select'))return;
    var k=e.key,i=current(),t=null;
    if(k==='ArrowDown'||k==='PageDown'||(k===' '&&!e.shiftKey))t=Math.min(i+1,secs.length-1);
    if(k==='ArrowUp'||k==='PageUp'||(k===' '&&e.shiftKey))t=Math.max(i-1,0);
    if(k==='Home')t=0;if(k==='End')t=secs.length-1;
    if(t!==null){e.preventDefault();secs[t].scrollIntoView();}
  });
})();
