// Hamburger drawer
function openDrawer(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// Share button — uses native Share Sheet if available, else custom bottom sheet
function shareJob(title, url){
  const fullUrl = url || window.location.href;
  const shareData = { title: title, text: 'Check out this job: ' + title, url: fullUrl };
  if(navigator.share){
    navigator.share(shareData).catch(()=>{});
  } else {
    const encUrl = encodeURIComponent(fullUrl);
    const encText = encodeURIComponent(title);
    document.getElementById('shareFb').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encUrl;
    document.getElementById('shareWa').href = 'https://wa.me/?text=' + encText + '%20' + encUrl;
    document.getElementById('shareMsg').href = 'fb-messenger://share/?link=' + encUrl;
    document.getElementById('shareTg').href = 'https://t.me/share/url?url=' + encUrl + '&text=' + encText;
    document.getElementById('shareGm').href = 'mailto:?subject=' + encText + '&body=' + encUrl;
    document.getElementById('shareSheet').classList.add('open');
  }
}
function closeShareSheet(){
  document.getElementById('shareSheet').classList.remove('open');
}
