class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
        var playerCountrefer=database.ref("playerCount");
        playerCountrefer.on("value",function(data){
       playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
     var playerindex="players/player"+ this.index;
     database.ref(playerindex).set({
         name:this.name,
         distance:this.distance
     })
    }
  static getPlayerInfo(){
      var playerInforefer=database.ref("players");
      playerInforefer.on("value",(data)=>{
          allPlayers=data.val();
      })
  }  
}