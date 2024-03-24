
<template>
  
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-white">Welcome to Battle Royale!</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="Please Enter your Username" required="" class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-buttons hover:text-buttons">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="Please Enter your Username" required="" class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttons sm:text-sm sm:leading-6" />
            </div>
          </div>
          <h4 class="font-semibold">Avatar</h4>
          <section class="grid grid-rows-2 grid-flow-col gap-5">
            
            <section class="flex flex-col items-center" v-for="index in Count" :key="index">    
                <img src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar.png?alt=media&token=15ad53df-9078-411d-b148-692af9062855https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar.png?alt=media&token=15ad53df-9078-411d-b148-692af9062855" alt="User" class="w-20 h-20 rounded-full mb-2">
          
            </section>   
        </section>  
          <div>
            <button type="submit" class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Not have a player?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-buttons hover:text-indigo-500">Register here!</a>
        </p>
      </div>
    </div>
  </template>
  

  <script>
export default {
    data() {
        return {
            Count: 6
        };
    }
};
</script>