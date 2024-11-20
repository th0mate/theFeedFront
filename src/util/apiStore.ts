export const apiStore = {
  apiUrl: "http://localhost/the_feed_api/public/api/",

  getAll(ressource:string):Promise<any>{
    return fetch(this.apiUrl+ressource)
      .then(reponsehttp => reponsehttp.json())
  },

  getById(ressource:string, id:number):Promise<any>{
    return fetch(this.apiUrl+ressource+"/"+id)
      .then(reponsehttp => reponsehttp.json())
  }
}
