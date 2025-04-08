import React from 'react';

function StudentTable(props) {


    const  students = props.data
    return (
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

    );
}

export default StudentTable;
