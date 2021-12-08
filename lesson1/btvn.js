//Bai 1 :
let student = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"],
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"],
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
];

//a)
let ageFunc = () => {
  let tuoi = prompt("Độ tuổi cần tìm?", "16");

  let s = student.filter((s) => {
    return s.age == tuoi;
  });
  alert(s[0].name);
};

//b)
let courseFunc = () => {
  let khoaHoc = prompt("Khóa học cần tìm?");

  let k = student.filter((k) => {
    return k.course.includes(khoaHoc) == true
  });
  for(let i =0; i<k.length;i++){
    console.log((k[i].name))
  }
};

//Bai 2:
let arr1 = [0, 2, 4, 6, 8];
let arr2 = [1, 3, 5, 7];

//a)
let duyetFunc = () => {
  let arr = arr1.concat(arr2);

  let n = arr.filter((n) => {
    return n > 3;
  });
  alert(n);
};

//b)
let ghepFunc = () => {
  let arr = arr1.concat(arr2);
  arr.splice(5, 1, 2);
  console.log(arr);
};

//c)
let sttFunc = () => {
  let arr = arr1.concat(arr2);
  arr.sort();
  console.log(arr);
};
