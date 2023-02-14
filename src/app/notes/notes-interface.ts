export interface NoteBook {
  id: number;
  name: string;
  lastUpdated: string;
  created: string;
  createdBy: string;
}

export interface Note {
  id: number;
  notebookId: number;
  name: string;
  noteContent: string;
  lastUpdated: string;
  created: string;
  createdBy: string;

}
