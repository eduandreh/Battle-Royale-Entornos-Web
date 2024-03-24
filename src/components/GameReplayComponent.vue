<template>
  <div class="flex items-center justify-between p-8 bg-steel rounded-lg">
    <div class="flex items-center space-x-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/8002/8002111.png"
        alt="Game"
        class="w-20 h-20 mr-2 p-2"
      />
      <div>
        <time class="text-white text-sm mb-1">06/03/2024</time>
        <h2 class="text-white font-bold uppercase">Game Name</h2>
      </div>
    </div>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>RESULT</span>
      <span>WON</span>
    </div>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>OPPONENT</span>
      <span>LILLI</span>
    </div>
    <div
      class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg font-medium"
    >
      <span>KILLS</span>
      <span>5</span>
    </div>
    <button class="bg-purple-600 text-white font-bold py-2 px-4 rounded">
      Replay
    </button>
  </div>
</template>
