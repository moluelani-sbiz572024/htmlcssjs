const personalData = {
    name: '侍太郎',
    age: 36,
    gender: '男性',
};

console.log(personalData);

personalData.age = 37;
personalData.address = '東京都';

console.log(personalData);
console.log(personalData.gender);

// もしプロパティ名が数字だったら

// personalData1 = {
//     0: '侍太郎',
//     1: 36,
//     2: '男性',
// };

// console.log(personalData1);

// personalData1[1] = 38;
// personalData1[3] = '北海道';

// console.log(personalData1);
// console.log(personalData1[2]);
