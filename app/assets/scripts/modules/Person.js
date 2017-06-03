class Person {
	constructor(fullName, salary){
		this.name = fullName;
		this.salary = salary;
	}
	
	greet(){
		console.log("My name is "+ this.name + " and salary is " + this.salary + " LPA.");
	}
}

export default Person;

