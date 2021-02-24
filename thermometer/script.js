function ready(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState === "complete") {
        callbackFunc();
      }
    });
  }
}
ready(function () {
  function loading($el) {
    const top = $el.getBoundingClientRect().top;
    const bottom = $el.getBoundingClientRect().bottom;
    console.log(top, bottom, window.scrollY);
    const $fullBody = document.body;
    const $fullPage = document.documentElement;
    if (top <= 0) {
      const $progress = $el.querySelector(".progress");
      const porcent = Math.floor(
        (($fullPage.scrollTop || $fullBody.scrollTop) /
          ($el.scrollHeight - $fullPage.clientHeight)) *
          100
      );
      $progress.style.height = `${porcent}%`;
      //console.log(porcent);
    }
  }
  document.addEventListener("scroll", (event) => {
    const $thermometer = document.querySelector("#thermometer");
    const $bar = $thermometer.querySelector(".bar");
    loading($bar);
  });
});
