import jsonp from 'jsonp';

export function getFeed(URL){
  return new Promise((resolve, reject)=>{
    jsonp(URL, {params:'jsonp'}, (err, data)=>{
      err? reject(err):  resolve(data);
    })
  })

}
