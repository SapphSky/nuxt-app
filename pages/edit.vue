<script setup lang="ts">
  const supabase = useSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  definePageMeta({
    middleware: "auth",
  });

  const updateUser = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        displayName: "",
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
    <code>
      {{ user }}
    </code>
  </div>
</template>

<style></style>
