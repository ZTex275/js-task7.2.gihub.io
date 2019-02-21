var div, body, p, script;
div = document.querySelectorAll('div');

  for (var i = 0; i < div.length; i++) {
	alert("тэгов div : " + div.length); 
	break;
}

body = document.querySelectorAll('body');

  for (var i = 0; i < body.length; i++) {
	alert("тэгов body : " + body.length); 
	break;
  }
  
p = document.querySelectorAll('p');

  for (var i = 0; i < p.length; i++) {
	alert("тэгов p : " + p.length); 
	break;
  }

script = document.querySelectorAll('script');

  for (var i = 0; i < script.length; i++) {
	alert("тэгов script : " + script.length); 
	break;
  }
