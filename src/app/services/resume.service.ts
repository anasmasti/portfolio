import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// @ts-ignore
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  getResume(resumeKeyAccess: string) {
    let defaultResumeKeyAccess = environment.RESUME_KEY
    if (defaultResumeKeyAccess == resumeKeyAccess) {
      return this.http.get(`${environment.API_URL + environment.API_VERSION}resume`, {
        headers: new HttpHeaders({
          'Api-Key-Access': environment.API_KEY,
        }),
        responseType: "blob"
      }).toPromise()
        .then(async (blob) => {
          await saveAs(blob, "anas_masti_cv.pdf");
        })
        .catch(err => console.error("Download error: ", err))
    } else  {
      return "You're not autorized to get the resume"
   }
  }
}
