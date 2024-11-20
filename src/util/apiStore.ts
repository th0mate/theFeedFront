import {ref} from "vue";

export const apiStore = {
  apiUrl: "http://localhost/the_feed_api/public/api/",
  utilisateurConnecter: ref(null),

  getAll(ressource: string): Promise<any> {
    return fetch(this.apiUrl + ressource)
      .then(reponsehttp => reponsehttp.json())
  },

  getById(ressource: string, id: number): Promise<any> {
    return fetch(this.apiUrl + ressource + "/" + id)
      .then(reponsehttp => reponsehttp.json())
  },

  login(login: string, password: string): Promise<any> {
    return fetch(this.apiUrl + "auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({login: login, password: password})
    })
      .then(reponsehttp => reponsehttp.json())
  },

  createRessource(ressource: string, data: any): Promise<any> {
    return fetch(this.apiUrl + ressource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(reponsehttp => reponsehttp.json())
  },

  logout(): Promise<any> {
    return fetch(this.apiUrl + "token/invalidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include'
    })
      .then(reponsehttp => reponsehttp.json())
  }
}
