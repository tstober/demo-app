function generate_details(DB, details, ID) {
    getJSON(DB).then(function(response) {
        console.log("generate_details: response " + response);
        var linkDB = JSON.parse(response);
        var detailsArray = JSON.parse(details);
        var body = document.getElementsByTagName("body")[0];
        var table = document.querySelector('#' + ID);
        table.innerHTML = "";
        var links = [];
        console.log("generate_details: details " + detailsArray);
        detailsArray.forEach(function(element) {
            console.log("element: " + element);
            var entry = {}
            entry["ID"] = element;
            entry["Details"] = linkDB[element];
            links.push(entry);
        });
        console.log("generate_details: links " + JSON.stringify(links));
        generateTableHead(table, ["ID", "Details"]);
        generateTable(table,links);
        console.log("generate_details: table " + table);
        console.log("generate_details: HTML " + document.querySelector('#' + ID).innerHTML);
    });
}

async function getJSON(URL) {
    console.log("loading URL: " + URL);
    // based on https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch(URL);
    const json = await response.json();
    console.log("getJSON: " + JSON.stringify(json));
    return JSON.stringify(json);
}

//taken from https://github.com/valentinogagliardi/back-to-js-basics/blob/master/build-table/build-table.js
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
        console.log("  key-value: " + element[key].substring(0,4));
        if (element[key].substring(0,4) == "http") {
            // taken from  https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/
            var a = document.createElement('a');
            a.title = "Link to issue";
            a.href = element[key];
            a.target = "_blank";
            var link = document.createTextNode(element[key]);
            a.appendChild(link);
            cell.appendChild(a);
        }
        else {
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
        console.log("  cell: " + cell);
    }
  }
}