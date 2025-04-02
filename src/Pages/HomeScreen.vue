<template>
<div class="home-screen">
    <h2>Employee Management</h2>
    <Registrationform :employee-to-edit="selectedEmployee" 
                       @employee-added="fetchEmployees" 
                       @employee-update="fetchEmployees"
                       @cancel-edit="selectedEmployee=null"/>
   
    <GridtableVue :employees="employees"
    @edit-employee="editemployee"
    @employee-deleted="fetchEmployees" />
</div>
</template>
<script >
import Registrationform from "./Registrationform.vue";
import GridtableVue from "./Gridtable.vue";
import employeeRegistration from "@/Services/EmployeeRegistration";

export default{
 name: 'HomrScreen',
 components : {
    Registrationform,
    GridtableVue
 },
 data(){
    return {
        employee: [],
        selectedemployee:null
    };
 },
 created(){
    this.fetchEmployees();
 },
 methods: {
    async fetchEmployees(){
        try{
            const response = await employeeRegistration.getemployeeDetails();
            if(response!= null && response.data!=null){
            this.employee=response.data;
            this.selectedemployee=null;
            }
        }
        catch(er)
        {
            console.error(er);
        }
    }
 }
};
</script>
<style>

</style>
