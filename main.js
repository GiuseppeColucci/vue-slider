new Vue({
    el:'#app',
    data:{

        //array di immagini
        images:[
           "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
            ,
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" 
            
            ,
           "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg"
            
            ,
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg"
            
            ,
         
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
      

        ],
        
        sliderGo:0,
    },
    // variabile contatore per lo slider
    methods:{

        prev:function(){
            // this.sliderGo-=1
            // if(this.sliderGo===sliderGo[4]){
            //     return sliderGo[4]
            // }
            if(this.sliderGo==0){
                this.sliderGo = 4
            } 
            else {
            this.sliderGo-=1
            }
        }
        ,

        next:function(){
            if(this.sliderGo==4){
                this.sliderGo = 0
            } 
            else{
                this.sliderGo+=1
                
            }
            
        }
    }



});