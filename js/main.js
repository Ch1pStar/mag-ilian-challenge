let width;
let height;
let renderer;
let stage;
let stageInst;
let racket;
let loaded = false;

const main = () => {
  width = window.innerWidth;
  height = window.innerHeight;

  renderer = PIXI.autoDetectRenderer(width, height, {
    backgroundColor: 0xEE3322,
  });
  document.body.appendChild(renderer.view);

  stage = new PIXI.Container();

  PIXI.animate.load(lib.stage, (inst) => {
    stage.addChild(inst);
    stageInst = inst;
    racket = inst.racket;
    loaded = true;
  });


  const update = (t) => {
    requestAnimationFrame(update);

    renderer.render(stage);

    if(loaded){
      racket.y -= 3;
      racket.x -= 3;
      racket.rotation -= 0.006;
    }

  };

  update(performance.now);

};

document.addEventListener('DOMContentLoaded', main);