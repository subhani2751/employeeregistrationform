<template>
  <div class="form-container">
    <h2>{{ isEdit ? 'Edit Employee' : 'Add Employee' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>First Name:</label>
        <input v-model="employee.Firstname" placeholder="John Doe" required />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input v-model="employee.Lastname" placeholder="John Doe" required />
      </div>
      <div class="form-group">
        <label>Hire Date:</label>
        <input type="date" v-model="employee.hiredate" required />
      </div>
      <div class="form-group">
        <label>Salary:</label>
        <input type="number" v-model="employee.salary" placeholder="60000" step="0.01" required />
      </div>
      <div class="form-group">
        <label>Designation:</label>
        <input v-model="employee.designation" placeholder="Software Engineer" required />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="employee.email" placeholder="john.doe@example.com" required />
      </div>
      <button type="submit">{{ isEdit ? 'Update' : 'Submit' }}</button>
      <button type="button" v-if="isEdit" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
import employeeRegistration from "@/Services/EmployeeRegistration"

export default { 
    name:'RegistrationFrom',
    props:{
        EmployeetoEdit:{ type :Object, default:null}
    },  
    data(){
        return{
            employee : {
                Firstname: '',
                Lastname : '',
                hiredDatre : '',
                salary : '',
                designation : '',
                email : ''
            },
            isEdit : false
        };
    },
    watch:{
        EmployeetoEdit(newval){
            if(newval){
                this.employee=[...newval];
                this.isEdit=true;
            }else{
                this.resetform()
            }
        }
    },
    methods:{
        async formsubmit(){
            try{
                if(this.isEdit){
                     await employeeRegistration.updateemployee();
                     this.$$emit('employee-update')
                }else{
                    await employeeRegistration.postemployeeDetails();
                    this.$$emit('employee-added')
                }
                this.resetform();
            }
            catch(er)
            {
                console.log(er);
            }
        },
        resetform(){
            this.employee={Firstname:'',Lastname:'',hiredDatre:'',designation:'',email:'',salary:''},
            this.isEdit=false;
        },
        cancelEdit(){
            this.resetform();
            this.$emit('cancel-edit');
        }
    } 
};
</script>
<style scoped>
.form-container { max-width: 400px; margin: 20px; }
.form-group { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; }
input { width: 100%; padding: 8px; }
button { padding: 10px 20px; margin-right: 10px; background-color: #007bff; color: white; border: none; cursor: pointer; }
button:hover { background-color: #0056b3; }
</style>
