<template>
  <div class="flex items-center justify-center h-screen">
    <CardPrimary>
      <div class="my-3">
        <h3 class="uppercase text-base text-3xl font-bold text-center">
          Login Yuknikah
        </h3>
      </div>
      <div>
        <InputPrimary
          v-model="message"
          label="Email"
          type="email"
          placeholder="Enter your Email"
          :onchange="handleInputChange"
        />
      </div>
      <div>
        <InputPrimary
          label="Password"
          type="password"
          placeholder="Insert your password"
          :onchange="handleInputChange"
        />
      </div>
      <div class="my-4">
        <button
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </div>
    </CardPrimary>
  </div>
</template>

<script>
import InputPrimary from '@/components/input/InputPrimary.vue';
import CardPrimary from '@/components/card/CardPrimary.vue';
export default {
  name: 'LoginView',
  components: {
    InputPrimary,
    CardPrimary,
  },
  data() {
    return {
      message: 'Halo, Vue!',
    };
  },
  methods: {
    handleInputChange(event) {
      console.log(event.target.value); // Handle the change event
    },
  },
};
</script>
