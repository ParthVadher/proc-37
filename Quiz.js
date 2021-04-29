class Quiz{
    constructor(){

    }
    getState(){
        var reference=database.ref("gamestate");
        reference.on("value",function(data){
            gamestate=data.val();
            console.log(gamestate);
        })
    }
    update(state){
    database.ref("/").update({gamestate:state});    
}
async start(){
    if(gamestate==0){
       contestant=new Contestant();
       var reference=await database.ref("contestantCount").once("value");
        if(reference.exists()){
           contestantCount=reference.val()
            contestant.getCount();
        }
        question=new Question();
        question.display();
    }
}
}