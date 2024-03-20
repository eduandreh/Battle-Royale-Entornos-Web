<template>
    <div class="flex flex-col">
        <h2 class="text-2xl font-bold mb-4">New Game</h2>
        <form class="flex flex-col justify-start">
            
                <section class="flex flex-col">
                    <label for="gameName" class="text-sm">Rows</label>
                    <input type="text" id="gameName" class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2" placeholder="1" />
                </section>
                <section class="flex flex-col">
                    <label for="gameName" class="text-sm">Columns</label>
                    <input type="text" id="gameName" class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2" placeholder="1" />
                </section>
                <section class="flex flex-col">
                    <label for="gameName" class="text-sm">HP Players</label>
                    <input type="text" id="gameName" class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2" placeholder="100" />
                </section>

                <button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8 ">Create Game</button>
            </form>

    </div>
    </template>        