<script lang="ts">
import { fileToBase64 } from "~/lib/base64"

export default defineComponent({
  data: () => ({
    image: undefined as File | undefined,
  }),
  methods: {
    async onSubmit() {
      if (!this.image) return
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
    <input
      type="file"
      accept="image/jpeg"
      @change="image = ($event.target as HTMLInputElement)?.files?.[0]"
    />
    <button type="submit">Submit</button>
  </form>
</template>
