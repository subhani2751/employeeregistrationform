<template>
  <div class="grid-container">
    <h2>Employee List</h2>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Hire Date</th>
          <th>Salary</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.Firstname }}</td>
          <td>{{ employee.Lastname }}</td>
          <td>{{ employee.hiredate }}</td>
          <td>${{ employee.salary }}</td>
          <td>{{ employee.designation }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <button @click="$emit('edit-employee', employee)">Edit</button>
            <button @click="deleteEmployee(employee.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import EmployeeRegistration from "@/Services/EmployeeRegistration"

export default {
    name: 'GridView',
    props :{
        employees : {type : Array , required: true}
    },
    methods: {
        async deleteEmployee(id){
            try{
            await EmployeeRegistration.deleteEmployee(id);
            this.$emit('employee-delete');
            }
            catch(Er)
            {
                console.error(Er);
            }
        } 
    }
};
</script>

<style scoped>
.grid-container { margin: 20px; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
th { background-color: #f2f2f2; }
button { padding: 5px 10px; margin-right: 5px; background-color: #dc3545; color: white; border: none; cursor: pointer; }
button:first-child { background-color: #007bff; }
button:hover { opacity: 0.8; }
</style>
