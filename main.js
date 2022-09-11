let sub1 = 80;
let sub2 = 34;
let sub3 = 95;
let sub4 = 78;
let sub5 = 93;

let grade;



if (sub1<40||sub2<40||sub3<40||sub4<40||sub5<40){
    grade ="no grade"
}else{
    let average = (sub1+sub2+sub3+sub4+sub5)/5

    if (average>90){
        grade = "O";
    }else if (average>80){
        grade = "A+";
    }else if (average>70){
        grade = "A";
    }
    else if (average>60){
        grade = "B+";
    }
    else if (average>50){
        grade = "B";
    }
    else if (average>40){
        grade = "C+";
    }
}

console.log (grade);