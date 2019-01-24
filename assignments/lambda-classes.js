// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
		this.gender = attributes.gender;
	}

	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
	}
}

class Instructor extends Person {
	constructor(instAttributes) {
		super(instAttributes);
		this.specialty = instAttributes.specialty;
		this.favLanguage = instAttributes.favLanguage;
		this.catchPhrase = instAttributes.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}.`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

class Student extends Instructor {
	constructor(studAttributes) {
		super(studAttributes);
		this.previousBackground = studAttributes.previousBackground;
		this.className = studAttributes.className;
		this.favSubjects = studAttributes.favSubjects;
		this.listsSubjects = studAttributes.listsSubjects;
	}

	listsSubjects() {
		console.log(this.favSubjects);
	}

	PRAssignment(subject) {
		console.log(`${student.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${student.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManagers extends Instructor {
	constructor(projAttributes) {
		super(projAttributes);
		this.gradClassName = projAttributes.gradClassName;
		this.favInstructor = projAttributes.favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debug's ${student.name}'s code on ${subject}`);
	}
}
