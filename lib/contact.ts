import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface ContactData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  phone: string;
  message: string;
  agreeToContact: boolean;
}

export const saveContactMessage = async (data: ContactData) => {
  await addDoc(collection(db, "contactMessages"), {
    ...data,
    createdAt: serverTimestamp(),
  });
};