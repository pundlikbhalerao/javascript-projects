function zoom(e) {
  const zoomer = e.currentTarget;
  const x = (e.offsetX / zoomer.offsetWidth) * 100;
  const y = (e.offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundSize = "200%";
  zoomer.style.backgroundPosition = `${x}% ${y}%`;
}

function resetZoom() {
  const zoomer = document.querySelector('.zoom');
  zoomer.style.backgroundSize = "cover";
  zoomer.style.backgroundPosition = "center";
}
