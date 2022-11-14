



// // // // let radius = prompt("Give the radius of a circle", "");
// // // // const area = Math.PI * radius * radius;
// // // // document.write(`The area is ${area}`);

// // // // let anyNumber = prompt("Enter a number");
// // // // let  m = Math();
// // // // document.write(Math.abs(anyNumber));

// // // // let anyNumber = prompt("Enter a number");
// // // // let  m = Math();
// // // // document.write(Math.abs(anyNumber));


// // // let theDate1 = new Date();
// // // document.write (theDate1);

// // // const theDate2 = new Date(949278000000);
// // // document.write (theDate2);


// // // document.write (`${theDate2.toTimeString()}`);
// // // // use setFullYear() to set a specific date


// // let d = new Date();
// // d.setFullYear(2012, 11, 14);
// // document.write(d);



// // // // get the day of the week as a number
// // // const d = new Date();
// // const weekday = new Array(7);
// // weekday[0] = "Sunday";
// // weekday[1] = "Monday";
// // weekday[2] = "Tuesday";
// // weekday[3] = "Wednesday";
// // weekday[4] = "Thursday";
// // weekday[5] = "Friday";
// // weekday[6] = "Saturday";
// // document.write(`Today is ${weekday[d.getDay()]}`);



// // let myDate = new Date();
// // myDate.setFullYear(2022, 13, 30);

// // document.write(myDate.setFullYear);

// // const today = new Date();
// // if (myDate > today) {
// // document.write("Today is before 30th of November 2022");
// // } else { 
// // document.write("Today is after 30th of November 2022");
// // }

// function startMyTime() { 
//     let today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
    
//      // prepend 0
//      if (m < 10) { 
//      m = "0" + m;
//      }
//      if (s < 10) { 
//      s = "0" + s
//      }
//      document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
//      t = setTimeout('startMyTime()', 500);
//     }
    
    

class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;

    }
    
    enroll (){
        console.log(`${this.name} `)
    }
}