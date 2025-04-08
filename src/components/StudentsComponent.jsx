import React, {useState} from 'react';
import StudentForm from "./StudentForm.jsx";
import StudentTable from "./StudentTable.jsx";

function StudentsComponent() {

    const [students,setStudents] = useState([]);

    function  studentAdd(student){
        setStudents([...students,student]);
    }
    return (
        <div className={"container"}>

            <StudentForm  add={studentAdd}/>
            <hr/>
            <StudentTable data ={students}/>
          </div>
    );
}

export default StudentsComponent;