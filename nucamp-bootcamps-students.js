const STUDENTS = [
    [
        "Neo",
        "neo@matrix.com",
        "Tacoma",
    ],
    [
        "Morpheus",
        "morpheus@matrix.com",
        "Tacoma",
    ],
    [
        "Trinity",
        "trinity@matrix.com",
        "Spokane",
    ],
    [
        "Cypher",
        "cypher@matrix.com",
        "Seattle",
    ],
    [
        "The Oracle",
        "oracle@matrix.com",
        "Marysville",
    ],
    [
        "Agent Smith",
        "smith@matrix.com",
        "Bellingham",
    ]
]
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        const matchingStudents = this.students.filter(s => s.email === student.email);
        if (matchingStudents.length === 0){
            this.students.push(student);
            console.log(`Registering ${student.email} to the Bootcamp Web Dev Fundamentals.`);
        } else {
            console.log("Student's are already registered.");
        }
        return this.students;
    }
}