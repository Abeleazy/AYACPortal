import { SetStateAction } from "react";

export interface ModalProps {
  showModal: boolean;
  editId: any;
  editData: any;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
  updateData: React.Dispatch<SetStateAction<any[]>>;
  data: any[];
}

export interface SuccessModalProps {
  showModal: boolean;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
  batchNumber: any;
}
