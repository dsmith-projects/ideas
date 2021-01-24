function loadCDInfo() {
    var xhr;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhr = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
    	if(this.readyState == 4 && this.status == 200) {
    		getCDValues(this);
    	}
    };
    xhr.open("GET", "./xml/cd_catalog.xml", true); //To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object
    xhr.send(); //sin argumentos se usa para GET requests. Se usa POST con arguementos (string) para el servidor
}

function getCDValues(xhr) {

	console.log("Siiiii" + xhr);
	var xmlDoc = xhr.responseXML;
	var table = "<tr><th>ARTIST</th><th>TITLE</th></tr>";
	var cds = xmlDoc.getElementsByTagName("CD");
	for(var i = 0; i < cds.length; i++){
		table += "<tr><td>" + cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" +
		cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>";		
	}
	document.getElementById("table-CDInfo").innerHTML = table;	
	
}