let s="   fly me   to   the moon  "
function findLength(s){
    let split=s.split(" ");
    let length=0;
    for(let i=0;i<split.length;i++){
        if(split[i].length){
             length=split[i].length;
        }
       
    }
    return length;
}
console.log(findLength(s));
