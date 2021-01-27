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
          
            if(this.sliderGo==0){
                this.sliderGo = 4;
               
            } 
            else {
            this.sliderGo-=1            

            }
        },
        

        next:function(){
            if(this.sliderGo==4){
                this.sliderGo = 0;
            } 
            else{
                this.sliderGo+=1;                
            }
            
        },
        active:function(i){
            if(i==this.sliderGo){
                return 'fas fa-circle active'
            }
            else{
                return 'fas fa-circle'
            }
        },
        changePic:function(i){
            this.sliderGo=i
        }
    }



});
//v-for in html, una funzine che mi ritorna le classi dei pallini inbase alla posizione delle immagini,seconda funzione con il click sul pallino che è collegata all'immagine