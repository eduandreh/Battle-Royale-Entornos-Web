<template>
  <section class="flex items-center justify-between p-8 bg-steel rounded-lg">
    <article class="flex items-center space-x-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/8002/8002111.png"
        alt="Game"
        class="w-20 h-20 mr-2 p-2"
      />
      <div>
        <time class="text-white text-sm mb-1">creation_date</time>
        <h2 class="text-white font-bold uppercase">size</h2>
      </div>
    </article>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>RESULT</span>
      <span>winner</span>
    </div>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>OPPONENT</span>
      <span>player_ID</span>
    </div>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>COINS</span>
      <span>coins_win</span>
    </div>
    <button class="bg-purple-600 text-white font-bold py-2 px-4 rounded">
      Replay
    </button>
  </section>
</template>

<script>
export default {
  props: {
    game: Object,
  },
  methods: {
    findPlayer(game) {
      return game.players_games.find(
        (p) => p.player_ID === localStorage.getItem('id-player'),
      );
    },
  },
};
</script>
