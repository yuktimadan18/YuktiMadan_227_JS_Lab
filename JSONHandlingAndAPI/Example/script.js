// ---------- Fetch API Example ----------
fetch('data.json')
    .then(response => response.json)
    .then(data => {
        let table = document.getElementById('fetchTable');
        table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th></tr>";
        data.forEach(student => {
            table.innerHTML += `<tr>
              <td>${student.id}</td>
              <td>${student.name}</td>
              <td>${student.marks}</td>
            </tr>`;
        });
    })
    .catch(error => console.error('Fetch Error:', error));

// ---------- jQuery AJAX Example ----------
$.getJSON('data.json', function(data){
    let table = $('#jqueryTable');
    table.append("<tr><th>ID</th><th>Name</th><th>Marks</th></tr>");
    $.each(data, function(index,student){
        table.append(`<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.marks}</td>
        </tr>`);
    });
}).fail(function(){
    console.log("Error loading JSON data with jQuery.");
});