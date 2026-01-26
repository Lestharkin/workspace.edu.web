const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      reject('Promise 1 rejected')
    }
    resolve('Promise 1 resolved')
  }, 300)
})

console.log(promise1)

promise1.then(value => {
  console.log(value)
}).catch(error => {
  console.log(error)
})



const w = async () => await promise1
console.log(await w())
