import { Component } from '@angular/core';
import { QrCodeGeneratorService } from '../shared/qr-code-generator.service';
import { PdfGeneratorService } from '../shared/pdf-generator.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent {
  selectedPayment: string = '';
  qrCodeUrl: string = '';

  constructor(
    private qrCodeGeneratorService: QrCodeGeneratorService,
    private pdfGeneratorService: PdfGeneratorService
  ) {}

  onSelectPayment(paymentMethod: string): void {
    this.selectedPayment = paymentMethod;

    this.qrCodeGeneratorService.generateQrCode(paymentMethod).then(url => {
      this.qrCodeUrl = url;
    });
  }

  generatePdf(): void {
    if (this.selectedPayment && this.qrCodeUrl) {
      console.log('Generating PDF...');
      const pdfContent = `Payment Method: ${this.selectedPayment}\n\nQR Code: ${this.qrCodeUrl}`;
      this.pdfGeneratorService.generatePDF(pdfContent, 'PaymentReceipt');
    } else {
      alert('Please select a payment method first.');
    }
  }
}
