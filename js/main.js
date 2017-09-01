let width;
let height;
let renderer;
let stage;

const main = () => {
  width = window.innerWidth;
  height = window.innerHeight;

  renderer = PIXI.autoDetectRenderer(width, height, {
    backgroundColor: 0xEE3322,
  });
  document.body.appendChild(renderer.view);


  stage = new PIXI.Container();


  const update = (t) => {
    requestAnimationFrame(update);

    renderer.render(stage);
  };

  update(performance.now);

};

document.addEventListener('DOMContentLoaded', main);