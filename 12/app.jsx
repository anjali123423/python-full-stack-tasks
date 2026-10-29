
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Student Portal</h1>
      <p>This is the Home page of our React Routing project.</p>
      <Link className="button" to="/students">
        Explore Students
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>This application demonstrates React Router and navigation.</p>
      <p>We use React to build fast and interactive web applications.</p>
    </div>
  );
}

function Students() {
  const students = [
    { id: 1, name: "Anjali" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Rahul" }
  ];

  return (
    <div className="page">
      <h1>Students Page</h1>
      <p>Click a student to view their details.</p>

      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>
      <Link to="/students">Back to Students</Link>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Email: students@example.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="button" to="/">
        Go to Home
      </Link>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <h2>Student Portal</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
