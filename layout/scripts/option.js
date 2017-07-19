/**
 * Created by jorch on 17/7/17.
 */
var counter = 1;
function addInput(divName){
    if (counter == 1)  {
        var newdiv = document.createElement('div');
        newdiv.setAttribute("id","option 2");
        newdiv.setAttribute("class","login-page");
        newdiv.innerHTML = " <div class='form'>\
            <div class='sectiontitle'><h3 class='heading'>Option 2</h3></div>\
            Best Asset<br><input type='text' placeholder='Less than %'>\
            Medium Asset<br><input type='text' placeholder='%'>\
            Must Buy Asset<br><input type='text' placeholder='More than %'>\
            <strong>Price</strong><br><input type='text' placeholder='%'>\
            <i class='fa fa-plus-square-o' aria-hidden='true' onClick= 'addInput(&quot;dynamicInput&quot;); return false;' style='font-size: 300%; color: #00ADEF;'></i>\
            <i class='fa fa-minus-square-o' aria-hidden='true' onClick='removeInput(&quot;dynamicInput&quot; , &quot;option 2&quot;); return false;' style='font-size: 300%; color: #00ADEF;'></i>\
            </div>";
        document.getElementById(divName).appendChild(newdiv);
        counter++;
    }
    else if (counter == 2) {
        var newdiv = document.createElement('div');
        newdiv.setAttribute("id","option 3");
        newdiv.setAttribute("class","login-page");
        newdiv.innerHTML = "<div class='form'>\
            <div class='sectiontitle'><h3 class='heading'>Option 3</h3></div>\
            Best Asset<br><input type='text' placeholder='Less than %'>\
            Medium Asset<br><input type='text' placeholder='%'>\
            Must Buy Asset<br><input type='text' placeholder='More than %'>\
            <strong>Price</strong><br><input type='text' placeholder='%'>\
            <i class='fa fa-minus-square-o' aria-hidden='true' onClick='removeInput(&quot;dynamicInput&quot; , &quot;option 3&quot;); return false;' style='font-size: 300%; color: #00ADEF;'></i>\
            </div>";
        document.getElementById(divName).appendChild(newdiv);
        counter++;
    }
    else {
        alert("You have reached the limit of adding " + counter + " inputs");
    }
}

function removeInput(parentDiv, childDiv){
    var child = document.getElementById(childDiv);
    var parent = document.getElementById(parentDiv);
    parent.removeChild(child);
    counter--;
}