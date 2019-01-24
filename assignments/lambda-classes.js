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
	}

	listsSubjects() {
		console.log(this.favSubjects);
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
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

// Example of an object built off of the Instructor class
const josh = new Instructor({
	name: 'Josh',
	age: 32,
	location: 'Christmas Land',
	gender: 'Male',
	specialty: 'Front-end',
	favLanguage: 'JavaScript',
	catchPhrase: "Isnt this really cool? I think it's super cool.",
})

// Example of an object built off of the Student class

const billy = new Student({
	name: 'Billy',
	age: 21,
	location: 'Antarctica',
	gender: 'Male',
	specialty: 'Nothing',
	favLanguage: 'JavaScript',
	previousBackground: 'Collecting acorns for the local squirells',
	className: 'WEB17',
	favSubjects: ['React', 'HTML', 'CSS', 'JavaScript']
})

const jilly = new Student({
	name: 'Jilly',
	age: 21,
	location: 'The North Pole',
	gender: 'Female',
	specialty: 'Nothing',
	favLanguage: 'Python',
	previousBackground: 'Worked at the Girl Scouts',
	className: 'WEB17',
	favSubjects: ['HTML', 'CSS', 'Redux', 'Python']
})

// Example of an object built off of the ProjectManagers class

const melinda = new ProjectManagers({
	name: 'Melinda',
	age: 28,
	location: 'Somewhere in Central, US',
	gender: 'Female',
	specialty: 'Back-end',
	favLanguage: 'Python',
	catchPhrase: 'Who am I missing?',
	gradClassName: 'CS14',
	favInstructor: 'Josh',
})

// console.log(josh.catchPhrase);
// console.log(josh.demo('Java'));
// console.log(josh.speak());
// console.log(billy.listsSubjects());
// console.log(billy.PRAssignment('JavaScript'));
// console.log(billy.sprintChallenge('JavaScript'));
// console.log(melinda.name);
// console.log(melinda.favLanguage);
// console.log(melinda.gradClassName);
// console.log(melinda.standUp('WEB17'));
// console.log(melinda.debugsCode(billy, 'JavaScript IV'));