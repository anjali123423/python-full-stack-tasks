
-- Day 14: SQL Fundamentals
-- Student and Course Management Database

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 16),
    city VARCHAR(50) DEFAULT 'Pune'
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    duration_months INT CHECK (duration_months > 0)
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    course_id INT REFERENCES courses(course_id)
);

ALTER TABLE students ADD COLUMN phone VARCHAR(15);

INSERT INTO students
    (student_id, student_name, email, age, city, phone)
VALUES
    (1, 'Aarav Sharma', 'aarav@example.com', 21, 'Pune', '9876543210'),
    (2, 'Priya Patil', 'priya@example.com', 22, 'Mumbai', '9876543211'),
    (3, 'Rahul Joshi', 'rahul@example.com', 20, 'Pune', '9876543212'),
    (4, 'Sneha More', 'sneha@example.com', 23, 'Nashik', '9876543213'),
    (5, 'Rohan Desai', 'rohan@example.com', 21, 'Mumbai', '9876543214');

INSERT INTO courses VALUES
    (101, 'Python Programming', 3),
    (102, 'Web Development', 4),
    (103, 'Cybersecurity', 6),
    (104, 'SQL Fundamentals', 2);

INSERT INTO enrollments VALUES
    (1, 1, 101),
    (2, 2, 102),
    (3, 3, 104),
    (4, 4, 103),
    (5, 5, 101);

-- Display all students
SELECT * FROM students;

-- Filter students by city
SELECT * FROM students WHERE city = 'Pune';

-- Sort students by name
SELECT * FROM students ORDER BY student_name ASC;

-- Limit the output
SELECT * FROM students LIMIT 3;

-- Display student and course details
SELECT s.student_name, c.course_name
FROM enrollments e
JOIN students s ON e.student_id = s.student_id
JOIN courses c ON e.course_id = c.course_id;

-- Update student information
UPDATE students
SET city = 'Nagpur'
WHERE student_id = 3;

-- Delete a selected enrollment
DELETE FROM enrollments
WHERE enrollment_id = 5;

-- Verify final records
SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;

-- DROP TABLE enrollments;
