<template>
  <button class="btn">
    <img
      class="icon"
      :src="require(`@/assets/svg/${arrowType}.svg`)"
      :alt="arrowType + ' arrow'"
    >
  </button>
</template>
<script>
export default {
  name: "ArrowButton",
  props: { arrowType: String },
};
</script>

<style scoped>
.btn {
  height: 90px;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;
}


@media (max-width: 481px) {
  .btn {
    width: 100%;
  }
}

@media (max-width: 1201px) and (min-width: 480px) {
  .card {
    width: 50%;
  }
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: 0.7;
}

.btn:disabled {
  opacity: 0.2;
  cursor: default;
}

.icon {
  height: 90px;
  width: auto;
}

</style>



