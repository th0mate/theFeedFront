import {reactive, ref} from "vue";

export const apiStore = reactive({
  apiUrl: "http://localhost/the_feed_api/public/api/",
  utilisateurConnecte: null,
  estConnecte: false,

  getAll(ressource: string): Promise<any> {
    return fetch(this.apiUrl + ressource)
      .then(reponsehttp => reponsehttp.json())
  },

  getById(ressource: string, id: number): Promise<any> {
    return fetch(this.apiUrl + ressource + "/" + id)
      .then(reponsehttp => reponsehttp.json())
  },

  login(login: string, password: string): Promise<{ success: boolean, error?: string }> {
    return fetch(this.apiUrl + "auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({login: login, password: password})
    })
      .then(reponsehttp => {
        if (!reponsehttp.ok) {
          return reponsehttp.json()
            .then(reponseJSON => {
              return {success: false, error: reponseJSON.message};
            })
        } else {
          return reponsehttp.json()
            .then(reponseJSON => {
              this.utilisateurConnecte = reponseJSON;
              this.estConnecte = true;
              console.log('Aprees connexion', this.estConnecte);
              return {success: true};
            })
        }
      })
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
      .then(reponsehttp => {
        console.log(reponsehttp);
        if (reponsehttp.ok) {
          this.utilisateurConnecte = null;
          this.estConnecte = false;
        } else {
          return reponsehttp.json()
            .then(reponseJSON => {
              return {success: false, error: reponseJSON.message};
            })
        }
      })
  }
});
