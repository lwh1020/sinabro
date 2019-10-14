//jQuery(function($){
//    $(".menu-toggle-btn").click(function(){
//        $(".gnb").stop().slideToggle("fast");
//    });
//}); 

function togchk(obj, elname) {
    var f = obj.form;
    for (var i = 0; i < f.elements.length; i++) {
        var el = f.elements[i];
        if (el.name == elname) el.checked = obj.checked;
    }
}


//function function1() {
//   var myRow = document.all.myTable.insertRow();
//   var myCell = myRow.insertCell();
//   myCell.innerText = "The added cell"; 
//} 