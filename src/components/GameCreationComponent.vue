<template>
  <section class="flex flex-col">
    <h1 class="text-2xl font-bold mb-4">New Game</h1>
    <form class="flex flex-col justify-start">
      <div class="flex flex-col mb-4">
        <label for="rows" class="text-sm">Rows</label>
        <input
          type="text"
          id="rows"
          class="bg-placeholder rounded-xl p-4 mt-2 w-3/4"
          placeholder="1"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="columns" class="text-sm">Columns</label>
        <input
          type="text"
          id="columns"
          class="bg-placeholder rounded-xl p-4 mt-2 w-3/4"
          placeholder="1"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="hpPlayers" class="text-sm">HP Players</label>
        <input
          type="text"
          id="hpPlayers"
          class="bg-placeholder rounded-xl p-4 mt-2 w-3/4"
          placeholder="100"
        />
      </div>
      <button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
        Create Game
      </button>
    </form>
  </section>
</template>
