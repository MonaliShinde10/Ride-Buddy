import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'; // Import the jsPDF class without * as jsPDF
import 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  generatePDF(content: string, fileName: string): void {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save(fileName + '.pdf');
  }
}
