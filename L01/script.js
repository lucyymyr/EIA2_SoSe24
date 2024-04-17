"use strict";
var randomPoem;
(function (randomPoem) {
    debugger;
    let subjects = ["Tony Stark ", "Steve Rogers ", "Natasha Romanoff "];
    let predicates = ["liebt ", "bekämpft ", "beschützt "];
    let objects = ["Burger", "Thanos", "NYC"];
    //console.log (subjects)
    //console.log (preticates)
    //console.log (objects)
    for (let i = subjects.length; i >= 1; i--) {
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subjects, _predicates, _objects) {
        let randomSubjects = Math.floor(Math.random() * _subjects.length);
        let randomPredicates = Math.floor(Math.random() * _predicates.length);
        let randomObjects = Math.floor(Math.random() * _objects.length);
        let removeSubjects = _subjects.splice(randomSubjects, 1)[0];
        let removePredicates = _predicates.splice(randomPredicates, 1)[0];
        let removeObjects = _objects.splice(randomObjects, 1)[0];
        let verse = removeSubjects + removePredicates + removeObjects;
        return (verse);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map