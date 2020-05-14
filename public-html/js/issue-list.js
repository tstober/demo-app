document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  var issuelist = document.getElementsByClassName("issue-list");
  var repository = issuelist[0].id;
  var loading = document.getElementById("issue-loading-info");
  var milestoneId

  var xhttp1 = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  var requestString = "https://github.ibm.com/api/v3/repos/" + repository;

  var now = new Date();


  xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('got milestones');
      var Data = JSON.parse(this.responseText);
      console.log(Data);
      var id;
      var title;
      var validSprint = false;
      for (var i = 0; i < Data.length; i++) {
        id = Data[i].number;
        title = Data[i].title;
        var endDateString = Data[i].due_on;
        if (endDateString === null && Data[i].open_issues > 0) {
          validSprint = true;
          break;
        }
        var endDate = new Date(endDateString);
        if (endDate > now) {
          validSprint = true;
          break;
        }
      }
      if (validSprint) {
        document.getElementById('sprint-name').innerText = title;
        milestoneId = id;
        console.log('milestone = '+ id);
        xhttp2.open("GET", requestString + '/issues?milestone=' +id, true);
        // xhttp2.setRequestHeader('Authorization', 'Bearer NEED NEW AUTH TOKEN');
        xhttp2.send();
      } else {
        document.getElementById('sprint-name').innerText = "No sprints found"
        loading.innerText = ""
      }
    }
  };
  xhttp2.onreadystatechange = function () {
    var list = document.createElement('ul');
    if (this.readyState == 4 && this.status == 200) {
      console.log('got isses');
      var issues = JSON.parse(this.responseText);
      document.getElementById('issue-counter').innerHTML = issues.length;
      for (var i = 0; i < Math.min(5, issues.length); i++) {
        var item = document.createElement('li');
        list.appendChild(item);
        item.innerHTML = '<a href="'+issues[i].html_url+'">'+issues[i].title+' #'+issues[i].number+'</a>'
      }
      issuelist[0].replaceChild(list, loading);
      if (issues.length > 5) {
        issuelist[0].insertAdjacentHTML('afterend', '<a href="https://github.ibm.com/' + repository + '/milestone/' + milestoneId + '" target="_blank" class="see-more">See More</a>')
      }
    }
  };
  xhttp1.open("GET", requestString + '/milestones', true);
  // xhttp1.setRequestHeader('Authorization', 'Bearer NEED NEW AUTH TOKEN');
  xhttp1.send();
}, false);
