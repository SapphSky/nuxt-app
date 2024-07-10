export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/login");
  }
});

// Reference in page using:
// definePageMeta({
//   middleware: "auth",
// });
