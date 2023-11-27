<script lang="ts">
import { fileToBase64 } from "~/lib/base64"

export default defineComponent({
  data: () => ({
    image: null as File | null,
  }),
  methods: {
    async onSubmit() {
      const base64image = await fileToBase64(this.image)
      const res = await $fetch("/api/upload", {
        method: "POST",
        body: {
          image: base64image,
        },
      })
      console.log(res)
    },
  },
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="file" accept="image/jpeg" @change="this.image = $event.target.files[0]" />
    <button type="submit">Submit</button>
  </form>
</template>
