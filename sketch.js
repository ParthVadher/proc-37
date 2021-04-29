var canvas,gamestate=0,contestantCount,database,quiz,question,contestant,allContestants;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
