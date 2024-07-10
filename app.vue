<script setup lang="ts">
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const logout = async () => {
    const { error } = await supabase.auth.signOut({
      redirectTo: "http://localhost:3000",
    });
    if (error) console.log(error)
  }
</script>

<template>
  <NuxtLayout>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <RouterLink to="/" class="btn btn-ghost text-xl">nuxt-app</RouterLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li v-if="user">
            <details>
              <summary>
                {{ user.email }}
              </summary>
              <ul v-if="user" class="bg-base-100 rounded-t-none p-2">
                <li>
                  <RouterLink to="/edit-user">Edit Profile</RouterLink>
                </li>
                <li @click="logout">
                  <p>
                    Log out
                  </p>
                </li>
              </ul>
            </details>
          </li>
          <li v-else>
            <RouterLink to="/login">Log in</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<style></style>
