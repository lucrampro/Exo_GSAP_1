
//ETAPE 1 A GAUCHE 1
TweenMax.to(".a", 0.2, {width:200,});
TweenMax.to(".b", 0.4, {width:200,});
TweenMax.to(".c", 0.6, {width:200,});
TweenMax.to(".d", 0.8, {width:200,});
TweenMax.to(".e", 1, {width:200,onComplete:function(){
TweenMax.to(".a", 1, {height:0});
TweenMax.to(".b", 1, {height:0});
TweenMax.to(".c", 1, {height:0});
TweenMax.to(".d", 1, {height:0});
TweenMax.to(".e", 1, {height:0,onComplete:function(){
TweenMax.to(".a", 0.2, {height:120});
TweenMax.to(".b", 0.4, {height:120});
TweenMax.to(".c", 0.6, {height:120});
TweenMax.to(".d", 0.8, {height:120});
TweenMax.to(".e", 1, {height:120,onComplete:function(){
TweenMax.to(".a", 1, {width:"100%"});
TweenMax.to(".b", 1, {width:"100%"});
TweenMax.to(".c", 1, {width:"100%"});
TweenMax.to(".d", 1, {width:"100%"});
TweenMax.to(".e", 1, {width:"100%",onComplete:function(){
TweenMax.to(".a", 0.6, {height:200});
TweenMax.to(".b", 0.6, {height:200});
TweenMax.to(".c", 0.6, {height:200});
TweenMax.to(".d", 0.6, {height:200});
TweenMax.to(".e", 0.6, {height:200,onComplete:function(){
TweenMax.to(".a", 0.2, {width:200,});
TweenMax.to(".b", 0.4, {width:200,});
TweenMax.to(".c", 0.6, {width:200,});
TweenMax.to(".d", 0.8, {width:200,});
TweenMax.to(".e", 1, {width:200,onComplete:function(){
    
    
    TweenMax.to(".a", 0.5, {width:"50%", ease: Bounce.easeOut});
    TweenMax.to(".b", 0.5, {width:"50%", ease: Bounce.easeOut});
    TweenMax.to(".c", 0.5, {width:"50%", ease: Bounce.easeOut});
    TweenMax.to(".d", 0.5, {width:"50%", ease: Bounce.easeOut});
    TweenMax.to(".e", 0.5, {width:"50%", ease: Bounce.easeOut, function(){
        
     
        
        
        
        
        
        
        
    }});
    
}});

}});
}});
}});
}});    
}});



