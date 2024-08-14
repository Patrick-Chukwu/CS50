const firstName = "Pat";
const lastName = "Chuks";

const value = 43;

const arr = [
    'string',
    42, 
    () => console.log("hi")
]

arr[2]()


for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
}

// coercion
const x = 42;
const explicit = String(x);
console.log(explicit)
const implicit = "" + x;
console.log(implicit)

const changeType= x.toString()
console.log(typeof(implicit))
console.log(typeof(explicit))

console.log(typeof(x))
console.log(changeType)
console.log(typeof(changeType))

// 
console.log(typeof null)
console.log(typeof undefined)