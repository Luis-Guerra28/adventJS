function learn(time, courses) {
    let coursesToLearn = [];
    for (let i = 0; i < courses.length - 1; i++) {
        for (let j = i + 1; j < courses.length; j++) {

            let ref = courses[i] + courses[j];
            let sumCourses = (coursesToLearn.length == 0)
                ? 0
                : courses[coursesToLearn[0]] + courses[coursesToLearn[1]];

            if (ref <= time) {
                if (ref > sumCourses) coursesToLearn = [i, j];
                if (ref == time) return coursesToLearn;
            }
        }
    }

    return (coursesToLearn.length == 0) ? null : coursesToLearn
}

console.log(learn(10, [2, 3, 8, 1, 4]))  // [0, 2]
console.log(learn(15, [2, 10, 4, 1]));   // [1, 2]
console.log(learn(25, [10, 15, 20, 5])); // [0, 1]
console.log(learn(8, [8, 2, 1]));        // [1, 2]
console.log(learn(8, [8, 2, 1, 4, 3]));  // [3, 4]
console.log(learn(4, [10, 14, 20]))      // null
console.log(learn(5, [5, 5, 5]))         // null
