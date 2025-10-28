import { create } from "zustand";

type PaymentState = {
  payment: string;
  setPayment: (newPayment: string) => void;

};
export const usePaymentStore = create<PaymentState>()((set) => ({
  payment: "wallet",
  setPayment: (newPayment) => set({ payment: newPayment }),
 
}));