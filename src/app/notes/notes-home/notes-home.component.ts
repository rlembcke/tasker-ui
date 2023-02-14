import { Component, OnInit } from '@angular/core';
import {NotesService} from "../notes.service";
import {Observable, of} from "rxjs";
import {NoteBook} from "../notes-interface";

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss']
})
export class NotesHomeComponent implements OnInit {

  notebooks : Observable<NoteBook[]> = of();

  constructor(public noteService: NotesService) { }

  ngOnInit(): void {
    this.notebooks = this.noteService.getNotebooks();

  }

  editNotebook(notebook: NoteBook): void {
    console.log(notebook.id);
  }

  deleteNotebook(notebook: NoteBook): void {
    console.log(notebook.id);
  }


}
