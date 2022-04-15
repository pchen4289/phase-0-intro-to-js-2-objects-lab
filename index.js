// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
        employee[key]= value;
        return employee;
    }
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
        delete newEmployee.name;
        return newEmployee;
    };
function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee.name;
    return employee;
}
