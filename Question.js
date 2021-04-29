class Question{
    constructor(){
         this.title=createElement("h2");
         this.input1=createInput("Write name");
         this.input2=createElement("h3");
         this.input3=createElement("h4");
         this.input4=createElement("h4");
         this.input5=createElement("h4");
         this.input6=createElement("h4");
         this.input7=createInput("Enter option number")
         this.button=createButton("Submit");
    }
    hide1(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    }
        display(){
        this.title.html("My QuizGame");
        this.input2.html("What starts and ends with the letter'E' but has only one letter?");
        this.input3.html("Everyone");
        this.input4.html("Envelope");
        this.input5.html("Example");
        this.input6.html("Estimate");
        this.title.position(displayWidth/2,displayHeight/2-100);
        this.input1.position(displayWidth/2,displayHeight/2+180);
        this.input2.position(displayWidth/2,displayHeight/2-50);
        this.input3.position(displayWidth/2,displayHeight/2-20);
        this.input4.position(displayWidth/2,displayHeight/2+10);
        this.input5.position(displayWidth/2,displayHeight/2+40);
        this.input6.position(displayWidth/2,displayHeight/2+70);
        this.input7.position(displayWidth/2+200,displayHeight/2+180)
        this.button.position(displayWidth/2+100,displayHeight/2+240);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input7.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name=this.input1.value();
            contestantCount=contestantCount+1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
    }