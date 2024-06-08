//mock authentication service
import axios from "axios";
import Login from "../components/Login";
//ilgili yerde calısacak(serviste calısacak)
// const AuthService = {
//   isAuthenticated: false,
//   login(username, password) {
//     //In a real app, you'd have API calls here.
//     //This is just a mockup,so we'll simulate async with a promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === "admin" && password === "password") {
//           this.isAuthenticated = true;
//           resolve();
//         } else {
//           reject();
//         }
//       }, 2000);
//     });
//   },
//   logout() {
//     this.isAuthenticated = false;
//   },
// };
const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: username,
        password: password,
      }
    );
    console.log(response);
    if (response.data.access_token) {
      //localStorage'a setItem ile bilgiler json a cevrilip kaydedilir
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("user");
  },
  getCurrentUser: () => {
    //alınırkende jsona cevrilip alınıyor
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;
