import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ordonnance } from '../../modules/types';

@Injectable({
  providedIn: 'root'
})
export class PostModulesService {

  http = inject(HttpClient);

  postLogIn(username: string, password: string){

    const loginUrl = "http://127.0.0.1:8000/api/auth/login/"
    const loginData = {username , password};

    return this.http.post(loginUrl, loginData);
  }

  createPatient(patientData: Object){ //pour créer DPI
    const apiUrl = 'http://127.0.0.1:8000/api/auth/register/patient' ;
    
    this.http.post(apiUrl , patientData).subscribe({
      next: (response:any)=>{
        console.log(response);
      },
      error : (error: any) =>{
        console.error('Error fetching patient:', error);
        alert("Il a eut une erreur pendant la création de DPI, veuillez vérifier vos données")
      }
    });

  }

  createOrdonnance(ordonnanceData: Object, idDossier:number){
    const apiUrl = `http://127.0.0.1:8000/api/auth/post/patient/dossier/${idDossier}/ordonnance` ;

    this.http.post(apiUrl , ordonnanceData).subscribe({
      next: (response:any)=>{
        alert("Nouvelle ordonnance a été ajouté")
      },
      error : (error: any) =>{
        console.error('Error creating ordo:', error);
        alert("Il a eut une erreur pendant la création d'une ordonnace, veuillez vérifier vos données")
      }
    });

  }

  createConsultation(consultData:Object, idDossier:number){
    const apiUrl = `http://127.0.0.1:8000/api/auth/post/patient/dossier/${idDossier}/consultation` ;

    this.http.post(apiUrl , consultData).subscribe({
      next: (response:any)=>{
        alert("Nouvelle consultation a été ajouté")
      },
      error : (error: any) =>{
        console.error('Error creating consula:', error);
        alert("Il a eut une erreur pendant la création d'une consultation, veuillez vérifier vos données")
      }
    });

  }

  createBilanBio(bilanData:Object, idDossier:number){

    const apiUrl = `http://127.0.0.1:8000/api/auth/post/patient/dossier/${idDossier}/bilanbio`;

    return this.http.post(apiUrl , bilanData);

  }

  createTestsInBio(results:Object, idBilan:number){

    const apiUrl = `http://127.0.0.1:8000/api/auth/post/medecin/patient/incBilanBio/fill/${idBilan}`;

    const requestUpdate = {
      resultats_analytiques : results
    }

    return this.http.post(apiUrl, requestUpdate);

  }

  createBilanRadio(bilanData:Object, idDossier:number){

    const apiUrl = `http://127.0.0.1:8000/api/auth/post/patient/dossier/${idDossier}/bilanRadio`;

    return this.http.post(apiUrl , bilanData);

  }

}
