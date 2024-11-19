export const apiStore = {
  apiUrl: "http://localhost/the_feed_api/public/api/",

  getAll(ressource:string):Promise<any>{
    return fetch(this.apiUrl+ressource)
      .then(reponsehttp => reponsehttp.json())
  },
  //à compléter plus tard avec les autres appels à l'API
}
