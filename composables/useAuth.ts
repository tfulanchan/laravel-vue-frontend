// composable
import axios from "axios";
export const useAuth = () => {
  interface LoginPayload {
    email: string;
    password: string;
  }
  async function login(payload: LoginPayload) {
    await axios.post("/login", payload);
    useRouter().push("/me");
  }
  async function logout() {
    await axios.post("/logout");
    useRouter().replace("/login");
  }
  interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  async function register(payload: RegisterPayload) {
    // const res = await axios.post("http://localhost/api/register", payload);
    await axios.post("/register", payload);
    await login({
      email: payload.email,
      password: payload.password,
    });
  }
  return {
    login,
    logout,
    register,
  };
};
