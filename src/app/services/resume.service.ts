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

    // Check if the key come empty
    if (resumeKeyAccess === '') throw new Error('Please enter the key');

    // Check if the key not match with my access key
    if (defaultResumeKeyAccess != resumeKeyAccess) throw new Error('Incorrect access key');

    // Check if the key match with my access key and give the access to the resume
    if (defaultResumeKeyAccess == resumeKeyAccess) {
      return this.http.get(`${environment.API_URL + environment.API_VERSION}resume`, {
        headers: new HttpHeaders({
          'Api-Key-Access': environment.API_KEY,
        }),
        responseType: "blob"
      }).toPromise()
        .then( async (blob) => {
          return await saveAs(blob, "anas_masti_cv.pdf") // Download the resume
        })
    } else {
      throw new Error("You're not autorized to get the resume")
    }
  }
}
