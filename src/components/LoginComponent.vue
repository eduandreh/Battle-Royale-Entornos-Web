<template>
   <form class="space-y-6" action="#" method="POST">
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-white"
          >Email address</label
        >
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="Please Enter your Username"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-white"
            >Password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="Please Enter your Username"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttons sm:text-sm sm:leading-6"
          />
        </div>
        <div class="mt-6">
        <label
            for="password"
            class="block text-sm font-medium leading-6 text-white"
            >Confirm Password</label
          >
        <div class="mt-2">
          <input
            id="password"
            name="Confirm password"
            type="password"
            autocomplete="Please confirm your Username"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttons sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      </div>
      <div>
        <button
          type="submit"
          class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
        >
          Sign in
        </button>
      </div>
    </form>
    

</template>