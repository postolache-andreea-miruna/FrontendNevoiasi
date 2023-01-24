export interface NevoiasCreateModel {
   gen: string  & { length: 1 };
   numeNevoias: string;
   prenumeNevoias: string;
   dataNastere: Date;
   sportTalent: string;
   deAjutat: boolean;
   email: string;
   telefon: string;
}
