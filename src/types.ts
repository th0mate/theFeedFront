export interface Utilisateur {
  id: number;
  adresseEmail: string;
  login: string;
  premium: boolean;
}

export interface Publication {
  id: number;
  message: string;
  datePublication: string;
  auteur: Utilisateur;
}
