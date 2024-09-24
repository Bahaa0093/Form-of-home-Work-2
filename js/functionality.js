function Click (e){
    e.preventDefault();

var name=document.getElementById ('name').value ;
var password=document.getElementById('password').value;
var gender=document.getElementsByName('Gender');
for(i=0;i<gender.length;i++){
    if(gender[i].checked===true){
      var valueofGender=gender[i].value;
    }
}
var A =document.getElementById('education');
var value = A.value;
var text = A.options[A.selectedIndex].text;



var education;
var hobbies=document.getElementsByName('Hobbies') ;
for(i=0;i<hobbies.length;i++){
if( hobbies[i].checked==true){
    var hobbiesText=hobbies[i].value;
}
}
var comment=document.getElementById('Comment').value;

document.getElementById('nameResult').innerHTML=name;
document.getElementById('passwordResult').innerHTML=password;
document.getElementById('genderResult').innerHTML=valueofGender;
document.getElementById('educationResult').innerHTML=text;
document.getElementById('hobbyResult').innerHTML+=hobbiesText;
document.getElementById('CommentResult').innerHTML=comment;
}