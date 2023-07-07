import axios from "axios"
const FormData = require('form-data');
const Buffer = require('buffer');
const api = 'http://localhost:8000';

export default {



  async getEvents() {
    let res = await axios.get(api + "/events");
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get(api + "/events/" + eventId);
    return res.data;
  },

  async getExpenses(){
    let res = await axios.get(api + "/expenses");
    return res.data;
  },

  async getItem(expense_id){
    let res = await axios.get(api + "/items/"+ expense_id)
    return res.data
  },

  async getCategories(period){
    let res = await axios.get(api + "/categories");
    return res.data
  },

  async postImage(imageData) {
    let res = await axios.post(api + "/receipt", { image: imageData });
    return res.data;
  },

  async detectImage(imageDataUrl){
    const receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';
    const imageData = imageDataUrl.split(',')[1];

    let form = new FormData();
    form.append('api_key', 'TEST'); // Use 'TEST' for testing purpose
    form.append('recognizer', 'auto'); // can be 'US', 'CA', 'JP', 'SG' or 'auto'
    form.append('ref_no', 'ocr_nodejs_123'); // optional caller provided ref code

    // Create a Blob from the image data URL
    fetch(imageDataUrl)
      .then(res => res.blob())
      .then(blob => {
        form.append('file', blob, { filename: 'receipt.jpg' }); // the image data

        axios.post(receiptOcrEndpoint, form)
        .then(response => {
          console.log(response.data); // Receipt OCR result in JSON
        })
        .catch(error => {
          console.error(error);
        });
      });
 
  }

  
}