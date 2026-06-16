const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE = "courses.json";

function getCourses() {
    const data = fs.readFileSync(FILE, "utf-8");

    if (!data.trim()) {
        return [];
    }

    return JSON.parse(data);
}

function saveCourses(courses) {
    fs.writeFileSync(FILE, JSON.stringify(courses, null, 2));
}

app.get("/courses", (req, res) => {
    res.json(getCourses());
});

app.get("/courses/:id", (req, res) => {
    const courses = getCourses();

    const course = courses.find(
        c => c.id == req.params.id
    );

    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    res.json(course);
});

app.post("/courses", (req, res) => {
    const courses = getCourses();

    const newCourse = {
        id: courses.length > 0
            ? courses[courses.length - 1].id + 1
            : 1,
        name: req.body.name,
        duration: req.body.duration,
        fee: req.body.fee
    };

    courses.push(newCourse);
    saveCourses(courses);

    res.status(201).json({
        message: "Course added successfully",
        course: newCourse
    });
});

app.put("/courses/:id", (req, res) => {
    const courses = getCourses();

    const index = courses.findIndex(
        c => c.id == req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    courses[index] = {
        ...courses[index],
        ...req.body
    };

    saveCourses(courses);

    res.json({
        message: "Course updated successfully",
        course: courses[index]
    });
});

app.delete("/courses/:id", (req, res) => {
    const courses = getCourses();

    const filteredCourses = courses.filter(
        c => c.id != req.params.id
    );

    if (filteredCourses.length === courses.length) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    saveCourses(filteredCourses);

    res.json({
        message: "Course deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});