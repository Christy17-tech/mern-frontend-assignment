import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const addEmployee = (employeeData) => {
    // Generate mock detailed data since the form only has basic fields
    const newEmployee = {
      id: Date.now(), // Generate a unique ID
      name: employeeData.name,
      username: employeeData.name.split(' ')[0].toLowerCase() + Math.floor(Math.random() * 100),
      email: `${employeeData.name.split(' ')[0].toLowerCase()}@empdash.com`,
      phone: "+1 (555) 000-0000",
      website: "empdash.com",
      company: {
        name: employeeData.designation,
        catchPhrase: `New hire in ${employeeData.location}`
      },
      address: {
        suite: "HQ",
        street: employeeData.location,
        city: employeeData.location,
        zipcode: "00000"
      },
      ...employeeData
    };
    
    // Add to top of the list so it's immediately visible
    setEmployees([newEmployee, ...employees]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, loading, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
