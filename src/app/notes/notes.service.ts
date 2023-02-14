import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteBook} from "./notes-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(public httpClient: HttpClient) {
    console.log('Data service connected');
  }

  getNotebooks(): Observable<NoteBook[]> {
    return this.httpClient.get<NoteBook[]>('http://localhost:8080/api/notebooks');
  }
}
