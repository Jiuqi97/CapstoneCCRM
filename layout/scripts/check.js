/**
 * Created by jorch on 14/7/17.
 */
document.getElementById("wrap").addEventListener("scroll", function(){
    var translate = "translate(0,"+this.scrollTop+"px)";
    this.querySelector("thead").style.transform = translate;
});

