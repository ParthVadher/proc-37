class Contestant{
    constructor(){
        this.name=null;
        this.index=0;
    }
    getCount(){
        var reference=database.ref("contestantCount");
    reference.on("value",function(data){
        contestantCount=data.val();
    })
    }
    updateCount(count){
        database.ref("/").update({contestantCount:count});
    }
    update(name){
    var contestantIndex="contestants/contestant"+contestantCount;
    database.ref(contestantIndex).update({name:name});
    }
   static contestantInfo(){
       var reference=database.ref("contestants");
       reference.on("value",function(data){
        allContestants=data.val();
    })
    }
}