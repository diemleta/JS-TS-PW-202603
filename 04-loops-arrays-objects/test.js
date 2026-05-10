
const users = [
  {id: 1, ten:"neko", role:"admin"},
  {id: 2, ten:"mew", role:"tester"},
  {id: 3, ten:"cat", role:"tester"},
]

const newUser = users.find((user)=>{
  return user.role === "admin";
})
console.log(newUser);

const testerUser = users.find((user)=>{
  return user.role === "tester";
})

//const testerUser = users.find((user)=> user.role === "tester");

console.log(testerUser);
