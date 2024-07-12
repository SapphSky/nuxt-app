<script setup lang="ts">
  const supabase = useSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  const userData = user.user_metadata

  definePageMeta({
    middleware: "auth",
  });

  const username = ref(userData?.username ?? "")
  const first_name = ref(userData?.first_name ?? "")
  const last_name = ref(userData?.last_name ?? "")

  const updateUser = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        username: username.value ?? "",
        first_name: first_name.value ?? "",
        last_name: last_name.value ?? ""
      },
    })
    if (data) console.log(data)
    if (error) console.log(error)
  }

  useHead({
    title: 'Edit Profile',
  });
</script>

<template>
  <div>
    <label>
      Username
      <input v-model="username">
    </label>
    <label>
      First Name
      <input v-model="first_name">
    </label>
    <label>
      Last Name
      <input v-model="last_name">
    </label>
    <button class="btn btn-primary btn-sm" @click="updateUser">Update</button>
  </div>
</template>

<style></style>
