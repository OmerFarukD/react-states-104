import React, {useState} from 'react';

function StudentForm(props) {

    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);

    const  [studentData, setStudentData] = useState({
        name:"",
        surname:"",
        age:0,
        className:"",
    });


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

            console.log(props.data);
            setStudentData({
                name:"",
                surname:"",
                age:0,
                className: ""
            })
        }
        setFormIsValid(true)
    }

    return (
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
    );
}
export default StudentForm;
