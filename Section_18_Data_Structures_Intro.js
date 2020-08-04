                  // Intro to Data Structures //

// .Data structures are collections of values, the relationships among them, 
// and the functions or operations that can be applied to the data.

// .Different data structures excel at different things. Some are highly specialized,
// while others (like arrays) are more generally used.

// .The more time you spend as a developer, the more likely you'll need to use one
// of these data structures. There is no one best data structure.
// Ex: Map/location data => graph  
// ordered list w/ fast inserts/removals at beginning => linked list
// web scraping nested HTML => tree
// scheduler => binary heap / priority queues  

// What is a class?
// .A blueprint for creating objects with pre-defined properties and methods.
// .Can be used to model various data structures and instantiate individuals.

// .The method to create new objects MUST be called constructor()
// .The class keyword creates a constant, so you cannot redefine it. Watch for syntax.

// Class Definition:

class Student{
    constructor(firstName, lastName){                 // constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.lates = 0;
        this.scores =[];
    }
    fullName(){                                       // instance method
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    static enrollStudents(...students){               // class method
        for(let i = 0; i < students.length; i++){
            console.log(students[i]);
        }
        return;
    }

    markLate(){                                       // instance method
        this.lates += 1;
        return `${this.firstName} has been late ${this.lates} times`; 
    }
    addScore(score){                                  // instance method
        this.scores.push(score);
        return this.scores;
    }
    calculateAvg(){                                   // instance method
        let sum = this.scores.reduce(function(a,b){ return a + b });
        return sum / this.scores.length; 
    }
}

// Class Instantiation:

let student1 = new Student('these', 'notes')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

//      class DataStructure(){
//            constructor(){
                // what default properties should it have?
//            }

//            someInstanceMethod(){
                // what should each object created from this class be able to do?
//            }
//        }




