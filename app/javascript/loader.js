$(function(){
    function checkOnlineStatus() {
      if (navigator.onLine) {
        $('.status').html('ONLINE');
      } else {
        $('.status').html('OFFLINE');
      }
    }
    checkOnlineStatus();
    setInterval(checkOnlineStatus, 5000);
  })
