<script setup lang="ts">
  const supabase = useSupabaseClient()
  const email = ref('')
  const password = ref('')

  const signInWithOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: '/confirm',
      }
    })
    if (error) console.log(error)
  }

  const signInWithPassword = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (data) {
      console.log("Login successful", data);
      navigateTo("/");
    }
    if (error) {
      console.log("Login failed", error);
    }
  }

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
  }

  useHead({
    title: 'Login',
  });
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" checked />
      <div class="collapse-title text-lg font-medium">Sign in</div>
      <div class="collapse-content">
        <div class="flex flex-row space-x-2 align-middle">
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" placeholder="Email" v-model="email" />
          </label>

          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
            </svg>
            <input type="password" placeholder="Password" v-model="password" />
          </label>

          <button class="btn btn-primary" @click="signInWithPassword">
            Login
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" disabled />
      <div class="collapse-title text-lg font-medium">Sign in using one-time password</div>
      <div class="collapse-content">
        <div class="flex flex-row space-x-2 align-middle">
          <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" placeholder="Email" v-model="email" />
          </label>

          <button class="btn btn-primary" @click="signInWithOtp" disabled>
            Send one-time password
          </button>
        </div>
        <p>One-time password sent to {{ email }}</p>
      </div>
    </div> -->

    <!-- <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" disabled />
      <div class="collapse-title text-lg font-medium">Sign up</div>
      <div class="collapse-content">
        <p>content</p>
      </div>
    </div> -->
  </div>
</template>

<style></style>
