let a = [34,-66, 33, 53];
let b =a.reduce((accum, item)=> {
    if (item > 0 ) {
        accum += item;
        
}
 return accum;
});


 //  accum = accum + ' ' + item;
 //  return accum;

 // console.log(b);

 let d = [-34,-66, 33, 53];
let h =d.reduce((accum, item)=> {
    if (item > 0 ) {
        accum += item;
        
}
 return accum;
}, 0);

 // console.log(b);

 let j = [
    {-34,-66, 33, 'Slava', 'id': 56}
];
let k =j.reduce((accum, item) => {
    return item.id; 
        
}, []);
console.log(k);

   


