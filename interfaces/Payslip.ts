export interface Payslip {
    id: string;
    fromDate: string;
    toDate: string;
    file: {
      fileName: string;
      fileType: string;
      fileUrl: string;
    };
  }
  