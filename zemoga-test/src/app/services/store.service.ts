
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreService {

    subjects: any;
    urlSubjets = '../../../assets/content.json';

    constructor(private http: HttpClient) {
        this.subjects = [];
    }
    /**
     * valida si ya existe el elemento en los registros de votaciones
     */
    pushSubject(subject: any) {
        var count = 0;
        this.subjects.forEach(element => {
            if (subject.id = element.id) {
                element = subject;
                count = count + 1;
            }
        });

        if (count == 0) {
            this.subjects.push(subject);
        }
    }

    /**
     * obtiene un sujeto y su informacion
     */
    getSubject(id: any) {
        let sub = null;
        this.subjects.forEach(element => {
            if (element.id == id) {
                sub = element;
            }
        });
        return sub;
    }

    getListSubjects() {
        return this.http.get(this.urlSubjets);
    }

}
