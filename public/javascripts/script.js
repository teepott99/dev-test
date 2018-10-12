// const courseApi = axios.create({
//   baseURL: 'https://titan.indwes.edu/api/programs/?language=en'
// });

// function getCourseInfo() {
//   courseApi.get()
//   .then(response => {
//     document.getElementById("course-").innerText = response;
//     console.log(response.data.name);
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//   }
  
//   document.onload = function(){
//     getCourseInfo();
//     // console.log(getCourseInfo("806e1f48-94d9-e511-80d2-005056a12f06"))
//   }

const courseApi = axios.create({
  baseURL: 'https://titan.indwes.edu/api/programs/?language=en'
})

function getCourseInfo(id) {
courseApi.get(id)
.then(response => {
  console.log(response.data)
})
.catch(err => {
  console.error(err)
})
}

document.getElementById("courseButton").onclick = function(){
getCourseInfo("846e1f48-94d9-e511-80d2-005056a12f06");
console.log("Works??")
}