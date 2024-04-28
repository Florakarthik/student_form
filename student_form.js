$(document).ready(function () {
    $("#save").click(function() {
        $("#update").hide();
        let name = $("#name").val();
        let age = $("#age").val();
        let email = $("#email").val();
        let studentDetails = {
            "name": name,
            "age": age,
            "email": email
        };
        if (validateFullName(name)) {
            if (ageValidation(age)) {
                if (emailvalidation(email)) {
                    if (saveStudentDetails(studentDetails)) {
                        // let tbody = $("#tablebody");
                        // let row = '<tr>' +
                        //     '<td>' + studentDetails.name + '</td>' +
                        //     '<td>' + studentDetails.age + '</td>' +
                        //     '<td>' + studentDetails.email + '</td>' +
                        //     '<td><button>Edit</button><button class="delete-btn">Delete</button></td>' + '</tr>';

                        // tbody.append(row);
                        displayStudentDetails();
                        alert("student details are added");
                    }
                    else {
                        alert("Already registered user");
                    }
                }
                else {
                    alert("please enter valid email");
                }
            }
            else {
                alert("please enter valid age");
            }
        } else {
            alert("please enter valid name");
        }

        $("#name").val("");
        $("#age").val("");
        $("#email").val("");

    });
    displayStudentDetails();   

});


/*$(document).ready(function () {
    $("#delete").click(function () {
        //console.log($(this).parents());
        // $(this).parents("tr").remove();

        console.log("index:" + $(this).index);
        deleteDetails();
    });
});*/
