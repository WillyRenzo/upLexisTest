<template>
  <div>
    <HeaderSec />

    <div class="backArea" @click="sendToHome()">
        <p class="backArea_title">
            &lt; {{ title }}
        </p>
    </div>

    <Carrousel />

    <div class="descriptionArea">
        <p class="descriptionArea_text">{{ text }}</p>
        <p class="descriptionArea_text">{{ text }}</p>
        <p class="descriptionArea_text">{{ text }}</p>
        <div class="descriptionArea_actions">
            <p>R$ <span class="descriptionArea_price">{{ price }}</span></p>
            <button class="btn_enable">Habilitar</button>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderSec from "../components/HeaderSec.vue";
import Carrousel from "../components/Carrousel.vue";

export default {
  components: {
    HeaderSec,
    Carrousel
  },
  data() {
    return {
      title: this.$route.query.title,
      text: this.$route.query.text,
      price: this.$route.query.price,
    };
  },
  methods: {
      sendToHome() {
          this.$router.push('/')
      }
  }
};
</script>

<style>
:root {
  --primary_linearGradient: linear-gradient(51deg, #f3873b 50%, #f0690a 100%);
}

.backArea {
    margin: 1rem 10rem 1rem;
    cursor: pointer;
}

.backArea_title {
    font-family: Roboto Regular, sans-serif;
    font-size: 2rem;
    color: #f0690a;
}

.descriptionArea {
    margin: 3rem 10rem 1rem;
}

.descriptionArea_actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.descriptionArea_text {
    color: #8f8f8f;
    font-size: 1.1rem;
}

.descriptionArea_price {
    font-size: 2rem;
}

.btn_enable {
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 2rem;
  padding: 0 1rem 0;
  height: 3rem;
  width: 8rem;
  border: none;
  border-radius: 5px;
  background: var(--primary_linearGradient);
  color: #fff;
  cursor: pointer;
}

</style>
