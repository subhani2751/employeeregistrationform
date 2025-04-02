import axios from "axios";

const apiClient=axios.create({
    baseURL : 'http://localhost:8080/',
    headers : {
        "Content-Type" : "application/json",
    }
});

export default{
    async postemployeeDetails(){
      return await apiClient.post('api/ApiEmployee/post');
    },
    async getemployeeDetails(){
        return  await apiClient.get('api/ApiEmployee/GetAllEmployees');
    },
    async Deleteemployee(){
        return  await apiClient.get('api/ApiEmployee/Delete');
    },
    async updateemployee(){
        return await apiClient.put('api/ApiEmployee/Update');
    },
    async ImportEmployees(){
        return await apiClient.post();
    }
}