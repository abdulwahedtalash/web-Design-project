var data = [
  {
    name: "Abdulwahed Talash",
    age: 21,
    gender: "male",
    lookingFor:"famale",
    location:"Kabul Afghanistan",
    image:'img/team-1.jpg'
  },
  {
    name:"Mozamil Fazli",
    age:21,
    gender:"male",
    lookingFor:"famale",
    location:"kabul Afghanistan",
    image:'img/team-2.jpg'
  },
  {
    name:"Bashir Ahamd",
    age:23,
    gender:"male",
    lookingFor:"famale",
    location:"Wardak Afghanistan",
    image:'img/team-3.jpg'
  },
  {
    name:"kamran Ahamd",
    age:22,
    gender:"male",
    lookingFor:"famale",
    location:"Pakistan",
    image:'img/team-1.jpg'
  },
  {
    name:"Laila Khan",
    age:24,
    gender:"famale",
    lookingFor:"male",
    location:"Canada",
    image:'img/team-4.jpg'
  }
];

// profile iterator
const person = profileIterator(data);

function profileIterator(){
  let start = 0;
  return {
    next: () => {
      if (start < data.length) {
          return {value:data[start++],done:false}
      }else return {done:true}
    }
  }
}
//console.log(person.next());

// calling nextprofile to show first profile without click next button
nextprofile();
// addEventListener to next button

document.getElementById('next').addEventListener('click',nextprofile);

// next profile function difination

function nextprofile(){

  const currentImage = person.next().value;
  if (currentImage !== undefined) {
    document.getElementById('profileimage').innerHTML = `<img src="${currentImage.image}">`;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
       <li class="list-group-item">Name: ${currentImage.name}</li>
       <li class="list-group-item">age: ${currentImage.age}</li>
       <li class="list-group-item">gender: ${currentImage.gender}</li>
       <li class="list-group-item">looking For: ${currentImage.lookingFor}</li>
       <li class="list-group-item">location: ${currentImage.location}</li>
    </ul>
    `;
  }else{
    window.location.reload();
  }


}
