// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let img = document.querySelector(".person-img")
let para = document.querySelector(".author")
let job = document.querySelector(".job")
let info = document.querySelector(".info")
let btn = document.querySelector(".random-btn")
let count=1

btn.addEventListener("click",()=>{
  let random = Math.floor(Math.random()*reviews.length)
  let pic = reviews.find(i => i.id==random)
  img.src= pic.img
  para.innerText = pic.name
  job.innerText = pic.job
  info.innerText = pic.text
})

let pre_btn = document.querySelector(".prev-btn")
let next_btn = document.querySelector(".next-btn")

next_btn.addEventListener("click",()=>{
 let next = reviews.find(i => i.id==count)
  img.src= next.img
  para.innerText = next.name
  job.innerText = next.job
  info.innerText = next.text
  // console.log(next);
  
  count++
  if(count > reviews.length){
    count=1
  }
  })
//  console.log(count);

  pre_btn.addEventListener("click",()=>{
 let pre = reviews.find(i => i.id==count)
  img.src= pre.img
  para.innerText = pre.name
  job.innerText = pre.job
  info.innerText = pre.text

  // console.log(next);
  
  count--
  if(count < 1){
    count= reviews.length
  }
  })
  // console.log(count);
  