// ---------- Helper Function: Assign Grade ----------
function getGrade(marks) {
    if (marks >= 90) return 'A';
    else if (marks >= 80) return 'B';
    else return 'C';
}

// ---------- Fetch API Example with Delay ----------
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Simulate asynchronous delay
        setTimeout(() => {
            let table = document.getElementById('fetchTable');
            table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>";

            data.forEach(student => {
                student.grade = getGrade(student.marks);
                let row = `<tr ${student.marks > 90 ? "class='highlight'" : ""}>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.marks}</td>
                            <td>${student.grade}</td>
                        </tr>`;
                table.innerHTML += row;
            });
        }, 1500); // 1.5s delay
    })
    .catch(error => console.error('Fetch Error:', error));

// ---------- jQuery AJAX Example ----------
$.getJSON('data.json', function(data) {
  let table = $('#jqueryTable');
  table.append("<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>");

  $.each(data, function(index, student) {
    student.grade = getGrade(student.marks);
    let row = `<tr ${student.marks > 90 ? "class='highlight'" : ""}>
                 <td>${student.id}</td>
                 <td>${student.name}</td>
                 <td>${student.marks}</td>
                 <td>${student.grade}</td>
               </tr>`;
    table.append(row);
  });
}).fail(function() {
  console.log("Error loading JSON data with jQuery.");
});
