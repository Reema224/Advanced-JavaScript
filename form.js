 class Course {
        constructor(name, code, instructor, semester) {
          this.name = name;
          this.code = code;
          this.instructor = instructor;
          this.semester = semester;
        }
      }

      function createCourse() {
        const name = document.getElementById("name").value;
        const code = document.getElementById("code").value;
        const instructor = document.getElementById("instructor").value;
        const semester = document.getElementById("semester").value;

        const course = new Course(name, code, instructor, semester);

        // Create a new div element to display the course information
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const nameP = document.createElement("p");
        nameP.textContent = "Name: " + course.name;
        courseDiv.appendChild(nameP);

        const codeP = document.createElement("p");
        codeP.textContent = "Code: " + course.code;
        courseDiv.appendChild(codeP);

        const instructorP = document.createElement("p");
        instructorP.textContent = "Instructor: " + course.instructor;
        courseDiv.appendChild(instructorP);

        const semesterP = document.createElement("p");
        semesterP.textContent = "Semester: " + course.semester;
        courseDiv.appendChild(semesterP);

        // Add the new div element to the page
        const coursesDiv = document.getElementById("courses");
        coursesDiv.appendChild(courseDiv);
      }