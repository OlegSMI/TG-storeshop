<template>
    <system-context-provider :value="value">
      <slot></slot>
    </system-context-provider>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: 'SystemContextProvider',
    props: {
      value: {
        required: true
      }
    },
    setup(props) {
      return {
        value: props.value
      };
    }
  });