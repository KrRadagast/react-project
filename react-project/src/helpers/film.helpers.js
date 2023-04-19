export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director == director);
  else return list;
}
// export function getListOf(list,prop){
//     return[...new Set(list.map((film)=>film[prop]|| "" ))]
// }
export function getListOf(list, prop) {
  return list.reduce((uniqueValue, item) => {
    if (uniqueValue.indexOf(item[prop]) == -1) {
      uniqueValue.push(item[prop]);
    }
    return uniqueValue;
  }, []);
}
export function getFilmStats(list) {
  let acc_score=0;
  list.forEach((obj)=>{
    acc_score+=parseInt(obj.rt_score);
    
    //console.log(obj.rt_score)
    //console.log(acc_score)
  });
  
    //console.log(list.rt_score)
    
    
  const total=list.length;
  const avg_score=acc_score/total;
  let latestFilm=0;
  list.forEach(film => {
    console.log(film.release_date)
    if(latestFilm<parseInt(film.release_date)){
        latestFilm=parseInt(film.release_date);
        console.log(latestFilm)
    }
    
  });
  return{avg_score,acc_score,total,latestFilm};

}
