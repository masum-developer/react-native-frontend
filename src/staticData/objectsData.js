const property = 0; 
export const objectData = [
    {
        id:1,
        title: "Count the number of properties in an object.",
        codeSnippet: `const person = {
            name: "John",
            age: 30,
            city: "New York"
          };
          
          let count = 0;
          for (let key in person) {
            if (person.hasOwnProperty(key)) {
              count++;
            }
          }
          console.log("Number of Properties:", count);`
    },
    {
        id: 2,
        title: 'Check if a specific property exists in an object.',
        codeSnippet: `const student = {
            name: "Jane",
            age: 20,
            major: "Computer Science"
          };
          
          const property = "age";
          const hasProperty = property in student;
          console.log(Has Property "${property}":, hasProperty);`
    },
    {
        id: 3,
        title: 'Find the average age of students in an array of objects.',
        codeSnippet: `const students = [
            { name: "John", age: 25 },
            { name: "Jane", age: 20 },
            { name: "Alex", age: 22 }
          ];
          
          let sum = 0;
          for (let i = 0; i < students.length; i++) {
            sum += students[i].age;
          }
          const averageAge = sum / students.length;
          console.log("Average Age:", averageAge);`
    },
    {
        id: 4,
        title: 'Convert an object into an array of key-value pairs.',
        codeSnippet: `const person = {
            name: "John",
            age: 30,
            city: "New York"
          };
          
          const entries = Object.entries(person);
          console.log("Object Entries:", entries);`
    },
    {
        id: 5,
        title: 'Merge two objects into a single object.',
        codeSnippet: `const object1 = { a: 1, b: 2 };
        const object2 = { c: 3, d: 4 };
        
        const mergedObject = { ...object1, ...object2 };
        console.log("Merged Object:", mergedObject);`
    },
    {
        id: 6,
        title: 'Determine if two objects have the same properties and values.',
        codeSnippet: `const object1 = { a: 1, b: 2, c: 3 };
        const object2 = { c: 3, b: 2, a: 1 };
        
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        
        let isEqual = true;
        if (keys1.length === keys2.length) {
          for (let key of keys1) {
            if (object1[key] !== object2[key]) {
              isEqual = false;
              break;
            }
          }
        } else {
          isEqual = false;
        }
        
        console.log("Objects are Equal:", isEqual);`
    },
]