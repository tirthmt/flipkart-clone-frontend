import { Products } from "../routes/apiRoutes";
import axiosInstance from "../AxiosInstance";

// export const getPatientsList = (data) => {
//     return axiosInstance.post(Patients.PATIENTS_LIST, data);
//   };

//   export const getPatient = (data) => {
//     return axiosInstance.post(Patients.PATIENTS_GET, data);
//   };

//   export const addPatient = (data) => {
//     return axiosInstance.post(Patients.PATIENTS_ADD, data);
//   };

//   export const updatePatient = (data) => {
//     return axiosInstance.post(Patients.PATIENTS_UPDATE, data);
//   };

//   export const deletePatient = (data) => {
//     return axiosInstance.post(Patients.PATIENTS_DELETE, data);
//   };

//   export const addMedications = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_ADD, data);
//   };

//   export const getMedications = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_GET, data);
//   };

//   export const getMedicationsList = (data) => {
//     return axiosInstance.get(`${Medications.MEDICATIONS_MEDICINELIST}?query=${data}`);
//   };

//   export const listMedications = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_LIST, data);
//   };

//   export const updateMedications = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_UPDATE, data);
//   };

//   export const deleteMedications = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_DELETE, data);
//   };

//   export const getChecklist = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_CHECKLIST, data);
//   };

//   export const medicationAction = (data) => {
//     return axiosInstance.post(Medications.MEDICATIONS_MEDICATIONACTION, data);
//   };

//   export const listNotes = (data) => {
//     return axiosInstance.post(Notes.NOTES_LIST, data);
//   };

//   export const getNote = (data) => {
//     return axiosInstance.post(Notes.NOTES_GET, data);
//   };

//   export const addNote = (data) => {
//     return axiosInstance.post(Notes.NOTES_ADD, data);
//   };

//   export const deleteNote = (data) => {
//     return axiosInstance.post(Notes.NOTES_DELETE, data);
//   };

//   export const updateNote = (data) => {
//     return axiosInstance.post(Notes.NOTES_UPDATE, data);
//   };

export const getProductsList = async () => {
  return await axiosInstance.get(Products.PRODUCT_LIST);
};

export const getProductsDetails = async (id) => {
  return await axiosInstance.get(`${Products.PRODUCT_DETAILS}/${id}`);
};
