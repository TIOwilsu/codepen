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
  const startprogress = ($bar, $porcent) => {
    const TIME = 100;
    const MAX = 100;
    let count = 0;
    const loading = setInterval(() => {
      if (count === MAX) clearInterval(loading);
      $bar.style.width = `${count}%`;
      $porcent.innerText = `${count}%`;
      count++;
    }, TIME);
  };
  const progress = () => {
    const $progress = document.querySelector(".progress");
    const [$progressContent] = $progress.children;
    const [$progressBar, $progressPorcent] = $progressContent.children;
    startprogress($progressBar, $progressPorcent);
  };
  progress();
});
