var easingTypes = ['swing', 'linear']

var AnimationsList = [
    {TextScroll:[['width'],['100'],['%'],[100],0]},
    {titleTextScroll2:[['width'],['100'],['%'],[500],0]},
    {fade_in:[['opacity'],['1'],[' '],[1000],0]},
    {btn_sucess:[['border-radius'],['80'],['%'],[500],0]},
    {smooth_height:[['height'],['100'],['%'],[800],0]},
    {box_height:[['height'],['200'],['px'],[500],0]},
    {text_scale:[['font-size'],['1'],['rem'],[300],1]},
    {text_from_left:[['margin-left','margin-left'],['5','0'],['vh'],[400,200],1]},
    {image_from_right:[['margin-right','margin-left'],['5','0'],['vh'],[400,200],1]}
]

$(window).ready(function() {
  
        
        SetAnimation(['.title-from-left'],'text_from_left'),
        SetAnimation(['.fade_in'],'assistaImage'),
        SetAnimation(['.btnOrc'],'fade_in')
   
});


function SetAnimation(elementID,AnimName){
    AnimName.forEach
    var Animations = this.AnimationsList.filter ((v)=>v[AnimName]!=undefined)[0]
   
     const keys = Object.keys(Animations)

    AnimateElement(elementID,Animations[keys[0]]);
}

function AnimateElement(elementID, Animations){
    
    Animations[0].forEach((element, index) => {
        $(elementID[(index < elementID.length ? index : 0)]).animate(
            {
                [element]: Animations[1][(index < Animations[1].length ? index : 0)] + Animations[2][(index < Animations[2].length ? index : 0)],
            },{
                duration: (Animations[3][(index < Animations[3].length ? index : 0)]),
                easing: (this.easingTypes[Animations[4][(index < Animations[4].length ? index : 0)]]),
                
            } 
        );
    });
} 
