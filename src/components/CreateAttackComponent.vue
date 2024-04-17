<template>
  <section class="flex flex-col">
    <h2 class="text-2xl font-bold mb-4">Create Attack</h2>
    <form class="flex flex-col justify-start">
      <section class="flex flex-col">
        <label for="gameName" class="text-sm">Name</label>
        <input
          type="text"
          id="gameName"
          class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2"
          placeholder="1"
        />
      </section>
      <section class="flex flex-col">
        <label for="gameName" class="text-sm">Coordinates</label>
        <input
          type="text"
          id="gameName"
          class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2"
          placeholder="1"
        />
      </section>

      <button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
        Create Attack
      </button>
    </form>
  </section>
</template>
