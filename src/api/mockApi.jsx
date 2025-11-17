// src/api/mockAuth.js
const users = [
  { id: 1, email: "admin@example.com", password: "password123", name: "Admin User" },
];

const mockAuth = {
  login: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      const user = users.find(u => u.email === email && u.password === password);
      setTimeout(() => {
        if (user) resolve({ id: user.id, email: user.email, name: user.name });
        else reject(new Error("Invalid email or password"));
      }, 500); // simulate network delay
    });
  },

  register: ({ email, password, name }) => {
    return new Promise((resolve, reject) => {
      const exists = users.find(u => u.email === email);
      setTimeout(() => {
        if (exists) reject(new Error("Email already exists"));
        else {
          const newUser = { id: users.length + 1, email, password, name };
          users.push(newUser);
          resolve(newUser);
        }
      }, 500);
    });
  }
};

export default mockAuth;
