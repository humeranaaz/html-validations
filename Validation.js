function form1_validation()
{
//Username Validation
if(f1.username.value=="")
{
alert("You must enter a User Name");
f1.username.focus();
return false;
}
if(f1.username.value.length<3)
{
alert("User Name must consist of atleast 3 character");
f1.username.focus();
return false;
}
var checkStr=f1.username.value;
for(i=0;i<checkStr.length;i++)
if(!(checkStr.charCodeAt(i)>=65&&checkStr.charCodeAt(i)<=91)
&& !(checkStr.charCodeAt(i)>=97 && checkStr.charCodeAt(i)<=122))
{
alert("Please enter valid User Name");
f1.username.focus();
return false;
}
//Password Validation
if(f1.password.value.length<6)
{
alert("Please enter Password not less than 6");
f1.password.focus();
return false;
}
if(!(f1.password.value==f1.password1.value))
{
alert("Please re-enter corrert Password");
f1.password1.focus();
return false;
}
//email validation
flag=true;
if(f1.email.value=="")
flag=false;
var Str=f1.email.value;
if(allValidChars(Str))
for(i=0;i<Str.length;i++)
if(Str.charAt(i)=="@")
{
if((Str.substr(i+1,9)=="yahoo.com")||(Str.substr(i+1,9)=="gmail.com"))
{
flag=true;
break;
}
}
else
flag=false;
if(!(flag))
{
alert("Please enter a valid Email ID");
f1.email.focus();
return false;
}
//phone number validation
flag=true;
if(f1.phno.value.length!=10)
flag=false;
var phno=f1.phno.value;
for(i=0;i<phno.length;i++)
if(!(phno.charCodeAt(i)>=48&&phno.charCodeAt(i)<=57))
flag=false;
if(!flag)
{
alert("Please enter valid Phone Number");
f1.phno.focus();
return false;
}
//gender validation
flag=false;
for(i=0;i<f1.radio.length;i++)
if(f1.radio[i].checked)
flag=true;
if(!(flag))
{
alert("Please choose a Gender");
return false;
}
//Date of birth validation
if((f1.dd.selectedIndex<=0)||(f1.mm.selectedIndex<=0)||(f1.yyyy.selectedIndex<=0))
{
alert("Please choose a Date of Birth");
f1.phno.focus();
return false;
}
//address validation
if(f1.address.value.length<25)
{
alert("Please enter a Correct Address");
return false;
}
}
function allValidChars(email)
{
var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
for (i=0; i < email.length; i++)
{
var letter = email.charAt(i).toLowerCase();
if (validchars.indexOf(letter) == -1)
return false;
} return true;
}