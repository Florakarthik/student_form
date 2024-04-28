function saveStudentDetails(student) {
    //localStorage.clear();
    let studentArray = [];
    let storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails == null) {
        studentArray.push(student);
        let studentDetailString = JSON.stringify(studentArray);
        localStorage.setItem('studentDetails', studentDetailString);
        return true;
    } else {
        studentArray = JSON.parse(storedStudentDetails);
        for (let studentInfo of studentArray) {
            if (studentInfo.email == student.email) {
                //alert("already registered user");
                return false;
            }
        }
        studentArray.push(student);
        let studentDetailString = JSON.stringify(studentArray);
        localStorage.setItem('studentDetails', studentDetailString);
        return true;
    }
}

function displayStudentDetails() {
    $("#update").hide();
    //localStorage.clear();
    let studentArray = [];
    let storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails == null) {
        return null;
    }
    studentArray = JSON.parse(storedStudentDetails);
    console.log(studentArray);

    let tbody = $("#tablebody");
    tbody.empty();
    for (let studentInfo of studentArray) {

        let row = '<tr>' +
            '<td>' + studentInfo.name + '</td>' +
            '<td>' + studentInfo.age + '</td>' +
            '<td>' + studentInfo.email + '</td>' +
            '<td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>' + '</tr>';

        tbody.append(row);
    }

    //Attach click event handler to edit buttons
    $(".edit-btn").click(function () {
        $("#save").hide();
        $("#update").show();
        //$("update").show();
        // Get the parent <tr> element of the clicked edit 
        let row = $(this).closest("tr");

        let name = row.find('td:eq(0)').text(); // Get name from first column
        //console.log(row.find('td:eq(0)').text());
        let age = row.find('td:eq(1)').text(); // Get age from second colum
        let email = row.find('td:eq(2)').text(); // Get email from second colum


        // Prompt for new name and age
        $("#name").val(name); //row.find('td:eq(0)').html("<input name='edit_name' value='" + name + "'>");
        $("#age").val(age);
        $("#email").val(email);
        let index = row.index();
        $("#update").attr('data-index', index);
        //let update = row.find('td:eq(3)').html("<button class='update-btn'>update</button>");
        //If user cancels editing or enters empty values, return
     });

     $("#update").click(function(){
        $("#save").show();
        //$("#update").hide();
        let index = $(this).attr('data-index'); // Retrieve the index from the button's data attribute
        console.log('Index passed to outside button action:', index);
        let row = $('#tabledata tr').eq(index);
        console.log(row);
        let newName = $("#name").val();
        let newAge = $("#age").val();
        let newEmail= $("#email").val();
        // Parse new age as a number
        newAge = parseInt(newAge);

        if (validateFullName(newName)) {
            if (ageValidation(newAge)) {
                if (emailvalidation(newEmail)) {
                    // Update row data
                    row.find('td:eq(0)').text(newName);
                    row.find('td:eq(1)').text(newAge);
                    row.find('td:eq(2)').text(newEmail);

                    // Get index of edited row
                   

                    // Retrieve existing data from local storage
                    let studentDetails = JSON.parse(localStorage.getItem('studentDetails')) || [];

                    // Update existing data
                    studentDetails[index] = { name: newName, age: newAge, email: newEmail };

                    // Update local storage
                    localStorage.setItem('studentDetails', JSON.stringify(studentDetails));
                    location.reload();
                } else {
                    alert("enter valid email")
                }
            }
            else {
                alert("enter valid age")
            }
        }
        else {
            alert("enter valid name")
        }
     });

    // Attach click event handler to delete buttons
    $(".delete-btn").click(function () {
        // Get the parent <tr> element of the clicked delete button
        let row = $(this).closest("tr");
        let index = row.index();
        console.log("index = " + index);
        deleteDetails(index);
        row.remove();
    });
}



function deleteDetails(index) {
    let studentArray = [];
    let storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails == null) {
        return null;
    }
    else {
        studentArray = JSON.parse(storedStudentDetails);
        studentArray.splice(index, 1);
        localStorage.setItem('studentDetails', JSON.stringify(studentArray));
        console.log(studentArray);
        displayStudentDetails();
    }
}



