<template>
    <article class="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-8">
      <!-- User Image and Name -->
      <section class="flex items-center justify-center space-x-10 w-full">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="User" class="w-24 h-24 rounded-full mb-2">
        <h1 class="text-2xl font-bold">EDU</h1>
      </section>

      <section class="flex items-center justify-between space-x-10">
            <!-- Coins -->
            <div class="flex flex-col items-center">
                <h2 class="text-lg font-semibold p-2">COINS</h2>
                <img src="https://www.pngall.com/wp-content/uploads/5/Game-Gold-Coin-PNG.png" alt="Coin" class="w-20 h-20 mr-2 p-2">
                <span class="text-lg font-semibold p-2">12,256</span>
            </div>
            
            <!-- Level Progress -->
            <div class="flex flex-col items-center">
                <h2 class="text-lg font-semibold p-9">LEVEL</h2>
                <div class="w-full bg-gray-700 rounded-full h-5 overflow-hidden">
                    <div class="bg-purple-600 h-5" style="width: 75%"></div>
                </div>
                <span class="text-lg font-semibold p-9">10</span>
            </div>
        </section>

      <!-- Stats -->
      <ul class="flex justify-between w-full p-4 bg-gray-700 rounded-lg">
        <li class="flex flex-col items-center">
          <span class="text-sm font-semibold">Kills</span>
          <span>25</span>
        </li>
        <li class="flex flex-col items-center">
          <span class="text-sm font-semibold">Games</span>
          <span>14</span>
        </li>
        <li class="flex flex-col items-center">
          <span class="text-sm font-semibold">Time</span>
          <span>14h</span>
        </li>
      </ul>

    </article>
  </template>
  