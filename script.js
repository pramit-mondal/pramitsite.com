
var btn=document.getElementById('btn');
btn.addEventListener('click',function(e)
{
e.preventDefault( )
var name =document.getElementById('name').value;
var email=document.getElementById('email').value;
var message=document.getElementById('message').value;
var body ='name' + name +
'<br/> email :'+email+'<br/> message :'+message;
Email.send({
   SecurityToken:'9788d741-89f7-406a-9a17-612baefc652b',
   Host : "smtp.gmail.com",
   Username : "mondalpramit76@gmail.com",
   Password : "pramit@123",
   To : 'mondalpramit76@gmail.com',
   From :email,
   Subject : message,
   Body : body,
}).then(
 message => alert(message)
);
})