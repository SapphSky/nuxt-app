<template>
  <div v-if="data">
    <h2>Your Stats</h2>
    <ul>
      <li>Kills: {{ stats.kills }}</li>
      <li>Deaths: {{ stats.deaths }}</li>
      <li>Jumps: {{ stats.jumps }}</li>
      <li>Damage taken: {{ stats.damage_taken }}</li>
      <li>Damage received: {{ stats.damage_received }}</li>
    </ul>
  </div>
  <div v-else="data">
    <p>Fetching data...</p>
  </div>
</template>

<script lang="ts" setup>
  const supabase = useSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from("ffxiv_stats")
    .select()
    .eq("user", user.id)

  const stats = data.length ? data[0] : null
</script>

<style></style>
