import React, {useState} from 'react';

function StudentForm() {
    const [name,setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [className, setClassName] = useState('');

    const [nameError, setNameError] = useState(null);
    const [ageError, setAgeError] = useState(null);

    const [formIsValid, setFormIsValid] = useState(true);
    const [students,setStudents] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const student = {ad:name, soyad:surname, yas:age, sinif:className};

        if (name===null || name.length<=0){
            setNameError('İsim Alanı Boş olamaz');
            setFormIsValid(false);
        }

        if (age <=0){
            setAgeError("Yaş Alanı 0 veya daha küçük olamaz.")
            setFormIsValid(false);
        }

        if (formIsValid){
            console.log("Log attım")
            setStudents([...students,student]);
            setName("")
            setSurname("")
            setAge(0)
            setClassName("")
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Öğrenci Adı</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="form-control"/>
                {
                    nameError &&
                    <div className="form-text text-danger">{nameError}</div>
                }

            </div>

            <div className="mb-3">
                <label className="form-label">Öğrenci Soyadı</label>
                <input
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    type="text" className="form-control"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Öğrenci Yaşı</label>
                <input
                    value={age}
                    onChange={(e) => {setAge(e.target.value)}}
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
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    type="text" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Ekle</button>
        </form>
    );
}

export default StudentForm;
