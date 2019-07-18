// 1, 2
var userObj={
    firstName: 'Olesia', 
    lastName: 'Miller',
    age: 27,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    } 
};
console.log(userObj.fullName());


// 3
function defUpperStr(string) {
    return (string || 'default text').toUpperCase();
}
console.log(defUpperStr());
console.log(defUpperStr('some text'));


// 4

function evenFn(n) {
    var arrNum = [];
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            arrNum.push(i);  
        };
    };
    return arrNum;
};
console.log(evenFn(20));


// 5

function weekFn(n) {
    var day = '';
    switch(n) {
        case 1: day = 'Понедельник';
            break;
        case 2: day = 'Вторник';
            break;
        case 3: day = 'Среда';
            break;
        case 4: day = 'Четверг';
            break;
        case 5: day = 'Пятница';
            break;
        case 6: day = 'Суббота';
            break;
        case 7: day = 'Воскресенье';
            break;
        default: day = null;
    }
    return day
}
console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));
console.log(weekFn(8));
console.log(weekFn());
console.log(weekFn(''));
console.log(weekFn(' '));
console.log(weekFn(1,5));
console.log(weekFn('fkjgdfjbv'));


// 6
function ageClassification(n) {
    return (0 < n && n <= 24) ? 'детский возраст' : 
    (24 < n && n <= 44) ? 'молодой человек' :
    (44 < n && n <= 65) ? 'средний возраст' :
    (65 < n && n <= 75) ? 'пожилой возраст' :
    (75 < n && n <= 90) ? 'старческий возраст' :
    (90<n && n <= 122) ? 'долгожители' : null; 
}
console.log('детск ', ageClassification(20));
console.log('молод ', ageClassification(40));
console.log('средний ', ageClassification(50));
console.log('пожилой ', ageClassification(70));
console.log('старч ', ageClassification(80));
console.log('долгож ', ageClassification(100));
console.log('ноль ', ageClassification(200));
console.log('ноль ', ageClassification(-1));
console.log('детск ', ageClassification(1));
console.log('ноль ', ageClassification(-1));
console.log('детск ', ageClassification(24));
console.log('молод ', ageClassification(24.01));
console.log('молод ', ageClassification(44));
console.log('ноль ', ageClassification(150));
console.log('средний ', ageClassification(44.01));
console.log('средний возв = ', ageClassification(65));
console.log('пожилой возр =', ageClassification(65.01));
console.log('пожилой ', ageClassification(75));
console.log('старч ', ageClassification(75.01));
console.log('старч ', ageClassification(90));
console.log('долгож ', ageClassification(90.01));
console.log('долгож ', ageClassification(122));
console.log('ноль ', ageClassification(122.01));
console.log('-1 :', ageClassification(-1));
console.log('5 :', ageClassification(5));
console.log('34 :', ageClassification(34));
console.log('50 :', ageClassification(50));
console.log('70 :', ageClassification(70));
console.log('80 :', ageClassification(80));
console.log('110 :', ageClassification(110));
console.log('130 :', ageClassification(130));


// 7
function oddFn(n) {
    var i = 0;
    var newArr = [];
    while (i++ <n) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }
return newArr;
}
console.log(oddFn(11));


// 8
function mainFunc (a, b, funk) {
    if (funk && typeof funk === 'function') return funk(a, b);
    return false;
}

function cbRandom(a1, b1) {
    return Math.floor(a1 + Math.random() * (b1 + 1 - a1));
}
function cbPow(a2, b2) {
    return Math.pow(a2, b2);
}
function cbAdd(a3, b3) {
    return a3 + b3;
}
console.log('Случайное число ', mainFunc(2, 3, cbRandom));
console.log('Степень ', mainFunc(2, 3, cbPow));
console.log('Сумма ', mainFunc(2, 3, cbAdd));
console.log('Не функция ', mainFunc(2, 3,''));
