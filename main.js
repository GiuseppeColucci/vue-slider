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
        
    },
    // variabile contatore per lo slider
    sliderGo:0,
    methods:{

        prev:function(){
            this.sliderGo-=1
        },

        next:function(){
            this.sliderGo+=1
        }
    }



});