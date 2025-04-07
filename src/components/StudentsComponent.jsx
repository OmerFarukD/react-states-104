import React, {useState} from 'react';

function StudentsComponent() {


    const  [studentData, setStudentData] = useState({
        name:"",
        surname:"",
        age:0,
        className:"",
    });


    const [nameError, setNameError] = useState(null);
    const [ageError, setAgeError] = useState(null);

    const [formIsValid, setFormIsValid] = useState(true);
    const [students,setStudents] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();


        if (studentData.name===null || studentData.name.length<=0){
            setNameError('İsim Alanı Boş olamaz');
            setFormIsValid(false);
        }

        if (studentData.age <=0){
            setAgeError("Yaş Alanı 0 veya daha küçük olamaz.")
            setFormIsValid(false);
        }

        if (formIsValid){
            console.log("Log attım")
            setStudents([...students,studentData]);

            console.log(students);
            setStudentData({
                name:"",
                surname:"",
                age:0,
                className: ""
            })
        }
        console.log(studentData)
    }

    return (
        <div className={"container"}>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Öğrenci Adı</label>
                    <input
                        value={studentData.name}
                        onChange={(e) => setStudentData({...studentData, name: e.target.value})}
                        type="text" className="form-control"/>
                    {
                        nameError &&
                        <div className="form-text text-danger">{nameError}</div>
                    }

                </div>

                <div className="mb-3">
                <label className="form-label">Öğrenci Soyadı</label>
                    <input
                        value={studentData.surname}
                        onChange={(e) => setStudentData({...studentData, surname: e.target.value})}
                        type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Öğrenci Yaşı</label>
                    <input
                     value={studentData.age}
                     onChange={(e) => {setStudentData({...studentData,age: e.target.value})}}
                        type="number"
                        className="form-control"/>
                    {
                        ageError &&
                        <div className="form-text text-danger">{ageError}</div>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Öğrenci Sınıfı</label>
                    <input
                        value={studentData.className}
                        onChange={(e) => setStudentData({...studentData,className: e.target.value})}
                        type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Ekle</button>
            </form>


            <hr/>

            <table className="table table-striped table-bordered table-hover table-warning">
                <thead>
                <tr>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Yaşı</th>
                    <th scope="col">Sınıfı</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.age}</td>
                            <td>{student.className}</td>
                        </tr>
                    ))
                }


                </tbody>
            </table>
        </div>
    );
}

export default StudentsComponent;
