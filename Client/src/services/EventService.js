import axios from "axios"
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
  }
}