<script>
function palindrome(message){
var result = '';
   result = message.split("").reverse().join("");
   
   if(result==message)
   	return true;
   else
   	return false;
}

document.write(palindrome('hello'));
document.write("<br>");
document.write(palindrome('abcba'));
</script>