<template>
  <div>
    <label class="text-base">{{ label }}</label>
    <input
      v-model=""
      class="my-2 w-full p-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700 transition duration-200"
      :type="type"
      :placeholder="placeholder"
      @change="onchange"
    />
  </div>
</template>
<script>
export default {
  name: 'InputPrimary',
  props: {
    placeholder: String,
    type: {
      type: String,
      default: 'text', // Set default value
      validator: (value) => {
        // Validate type prop to allow specific values
        return ['text', 'email', 'password'].includes(value);
      },
    },
    label: {
      type: String,
    },
    onchange: {
      type: Function,
      required: true,
    },
  },
};
</script>
