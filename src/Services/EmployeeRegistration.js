import axios from "axios";

const apiClient=axios.create({
    baseURL : 'api/',
    headers : {
        "Content-Type" : "application/json",
    }
});

export default{
    async postemployeeDetails(){
      return await apiClient.post('ApiEmployee/post');
    },
    async getemployeeDetails(){
        return  await apiClient.get('ApiEmployee/GetAllEmployees');
    },
    async Deleteemployee(){
        return  await apiClient.get('ApiEmployee/Delete');
    },
    async updateemployee(){
        return await apiClient.put('ApiEmployee/Update');
    },
    async ImportEmployees(){
        return await apiClient.post();
    }
}