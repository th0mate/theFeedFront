export interface Utilisateur {
  id: number;
  adresseMail: string;
  login: string;
  premium: boolean;
}

export interface Publication {
  id: number;
  message: string;
  datePublication: string;
  auteur: Utilisateur;
}
