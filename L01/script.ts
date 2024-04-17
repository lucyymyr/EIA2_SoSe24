namespace randomPoem {
    
debugger;


let subjects : string[] = ["Tony Stark ", "Steve Rogers ", "Natasha Romanoff "]
let predicates = ["liebt ", "bekämpft ", "beschützt "]
let objects = ["Burger", "Thanos", "NYC"]
//console.log (subjects)
//console.log (preticates)
//console.log (objects)

for (let i = subjects.length; i >= 1; i--){

    console.log(getVerse (subjects, predicates, objects));

}
function getVerse (_subjects: string[], _predicates: string[], _objects: string[]){
    let randomSubjects: number = Math.floor(Math.random() * _subjects.length);
    let randomPredicates: number = Math.floor(Math.random() *_predicates.length);
    let randomObjects: number = Math.floor(Math.random() * _objects.length);

    let removeSubjects: string = _subjects.splice(randomSubjects, 1) [0];
    let removePredicates: string = _predicates.splice(randomPredicates, 1) [0];
    let removeObjects: string = _objects.splice(randomObjects, 1) [0]

    let verse: string = removeSubjects + removePredicates + removeObjects;

    return (verse)

    }

}



