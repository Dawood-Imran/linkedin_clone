function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
 
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
 
        reader.readAsDataURL(input.files[0]);
    }
 }
 
 $("#imgInp").change(function(){
    readURL(this);
    console.log("hiii")
 });
 
 document.getElementById("input_btn")
 .addEventListener('click',function(){
   document.getElementById("imgInp").click();  
 },false);