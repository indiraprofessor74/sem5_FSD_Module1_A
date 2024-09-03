//spread operator js
const set1 = [10,20,30,40,50]
const set2 = [...set1,60,70,80,90,100]
console.log(set2)
const student = 
{
    sName:"Raj",
    email: "raj@gmail.com"
};
const engstudent =
{
    ...student,
    branch: "AIML"
}
console.log(engstudent)