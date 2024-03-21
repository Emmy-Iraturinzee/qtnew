document.body.onmousemove = function (e) {
    this.style.setProperty("--mouse-x", `${e.clientX}px`);
    this.style.setProperty("--mouse-y", `${e.clientY}px`);
  };