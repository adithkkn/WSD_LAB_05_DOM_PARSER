/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile = 'Railway.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            displayTable();
            myFunction();
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

function myFunction(xml) {
   
    document.getElementById("modulename").innerHTML =
    xmlDoc.getElementsByTagName("modulename")[0].childNodes[0].nodeValue;
    document.getElementById("caption").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    document.getElementById("abt").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[1].childNodes[1].childNodes[0].nodeValue;

 document.getElementById("abb").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt2").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[3].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("abt3").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("abt4").innerHTML =
    xmlDoc.getElementsByTagName("c")[0].childNodes[5].childNodes[3].childNodes[0].nodeValue;




var btn = document.querySelector('button');

btn.addEventListener('click', function(){
  var hint = document.getElementById('dis');
  if(hint.style.display == 'none'){
    hint.style.display = 'block';
  }
  else{
    hint.style.display = 'none';
  }

});
   
    }

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>trainno</th><th>seatno</th><th>passengername</th><th>source</th><th>destination</th><th>bookingstatus</th><th>stationCode</th></tr>"

    var x = xmlDoc.getElementsByTagName("BookingAndPayments")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("trainno")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("seatno")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("passengername")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("source")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("destination")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("bookingstatus")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("stationCode")[0].childNodes[0].nodeValue + "</td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>"
    }
    document.getElementById("table").innerHTML = table
}

//function to delete record from XML
function deleteRecord(i)
{  
    y = xmlDoc.getElementsByTagName("BookingAndPayments")[i];
    xmlDoc.documentElement.removeChild(y)
    console.log("Record deleted:")
    displayTable()
}



//function to add new record to xml

function addNewRecord()
{
    var i
    var emp = []
    var x = document.getElementById("addRecordForm")
    BookingAndPayments= xmlDoc.createElement("BookingAndPayments")
    emp[0] = xmlDoc.createElement("trainno")
    emp[1] = xmlDoc.createElement("seatno")
    emp[2] = xmlDoc.createElement("passengername")
    emp[3] = xmlDoc.createElement("source")
    emp[4] = xmlDoc.createElement("destination")
    emp[5] = xmlDoc.createElement("bookingstatus")
    emp[6] = xmlDoc.createElement("stationCode")
    
    for(i = 0; i < 6; i++)
    {
        

        emp[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        BookingAndPayments.appendChild(emp[i])
    }
    xmlDoc.documentElement.appendChild(BookingAndPayments);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}
