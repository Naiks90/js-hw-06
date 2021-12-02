import users from '../users.js';

// Задание 1
// Получить массив имен всех пользователей (поле name).

// const getUserNames = (users) => users.map((user) => user.name);

// // {
// //   const UserName = users.map(function (user) {
// //     return user.name;
// //   });
// //   return UserName;
// // };
// console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// {
//   const filterUser = users.filter(function (user) {
//     return user.eyeColor === color;
//   });
//   return filterUser;
//   // твой код
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) =>
//   users.filter((user) => user.gender === gender).map((user) => user.name);

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// // Задание 4
// // Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

// console.dir(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// {
//   // твой код
// }

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => user.age > min && user.age < max);

// {
//   // твой код
// }

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => (total += user.balance), 0);
// {
//   // твой код
// }

// console.log(calculateTotalBalance(users)); // 20916
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter((user) => user.friends.some((friends) => friends === friendName))
//     .map((user) => user.name);

// const getUsersWithFriend = (users, friendName) => {
//   const arreyNameFriends = users.reduce(function (userName, user) {
//     if (
//       user.friends.some(function (friend) {
//         return friend === friendName;
//       })
//     ) {
//       userName.push(user.name);
//     }
//     return userName;
//   }, []);
//   return arreyNameFriends;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// ['Elma Head', 'Sheree Anthony'];
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = (users) =>
//   users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);

// {
//   // твой код
// }

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
//   const skillsUser = users
//     .reduce(function (skil, user) {
//       skil.push(...user.skills);
//       return skil;
//     }, [])
//     .sort();

//   const filterperley = skillsUser.filter(function (skill, index) {
//     return skillsUser.indexOf(skill) === index;
//   });
//   return filterperley;
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
