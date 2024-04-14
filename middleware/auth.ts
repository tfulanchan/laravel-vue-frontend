import axios, { AxiosError } from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // try {
  //   // manual reqest
  //   // await axios.get("/user");
  // } catch (error) {
  //   if (error instanceof AxiosError && error.response?.status === 401) {
  //     return navigateTo("/login");
  //   }
  // }
  const { user, initUser } = useAuth();
  await initUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});