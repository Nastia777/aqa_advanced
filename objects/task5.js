const users = [
    { name: "Anna", email: "anna@gmail.com", age: 20 },
    { name: "Scott", email: "scott22@gmail.com", age: 22 },
    { name: "Peter", email: "peter@gmail.com", age: 35 }
]

for (const { name, email, age } of users) {
    console.log(`${name} is ${age} years old and has email ${email}.`);
}