let num=10;     //Number in primitive so it store in stack
let num2=num;   //num2 is primitive so it cn takes only  a copy of user value means user2=10(copy from user)
num2=20;        //hnage the 10(copy) in 20;No effect on original 10;
console.log(num);   //result=10
console.log(num2);  //result=20



let user1={         //object is a  non primitive data type so it stored in stact
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let user2=user1; //non primitive so it pointed original email of user1

user2.email="Ani@gmail.com"  //change in heap section 

console.log(user1.email);   
console.log(user2.email);

