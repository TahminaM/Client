/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {const { student, handleDelete } = props;
if(student === null)
  {
    return (
      <div>
        <p>There are no students.</p>
      </div>
      );
  }
    //if (student.gpa !== null) {
    //    let gpa = student.gpa.toFixed(1);
    //    if (gpa % 1 === 0) { 
    //      gpa = gpa.toFixed(1); 
    //    }
    //}
  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img style={{width:'10%', borderRadius:'50%'}} src={student.imageUrl ? student.imageUrl : "https://i.imgur.com/y0B5yj6.jpeg"} alt="" />
      <h3>{student.email}</h3>
      {student.campus && <Link to={`/campuses/${student.campusId}`}>
            <h2>{student.campus.name}</h2>
      </Link>}
      <h2>GPA: {student.gpa ? student.gpa : 'Not Available'}</h2>
      {!student.campus && <h3>Not enrolled in any colleges</h3>}
      <button className="btn" onClick={() => handleDelete(student.id)}>Delete</button>
      <br />
      <br />
      <Link to={`/editstudent/${student.id}`}>
            <button className="btn">Edit Student</button>
      </Link>
    </div>
  );

};

export default StudentView;