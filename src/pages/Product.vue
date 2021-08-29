<template>
  <div>
    <Header />

    <div class="backArea" @click="sendToHome()">
      <p class="backArea_title">&lt; {{ title }}</p>
    </div>

    <Carousel :cards="cards" />

    <div class="descriptionArea">
      <p class="descriptionArea_text">{{ text }}</p>
      <p class="descriptionArea_text">{{ text }}</p>
      <p class="descriptionArea_text">{{ text }}</p>
      <div class="descriptionArea_actions">
        <p>
          R$ <span class="descriptionArea_price">{{ price }}</span>
        </p>
        <button class="btn_enable">Habilitar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    Header,
    Carousel,
  },
  data() {
    return {
      title: this.$route.query.title,
      text: this.$route.query.text,
      price: this.$route.query.price,
      cards: [
        {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?",
        },
        {
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptate distinctio, recusandae fuga eaque unde perspiciatis corrupti nemo. Sint, accusamus.",
        },
        {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic suscipit esse, quod minima voluptas vitae nihil modi pariatur et, incidunt odio dolore nisi doloremque adipisci saepe ducimus tempore quis.",
        },
        {
          text: "Lorem ipsum dolor sit amet."
        }
      ],
    };
  },
  methods: {
    sendToHome() {
      this.$router.push("/");
    },
  },
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

@media (max-width: 481px) {
  .descriptionArea {
    margin-left: 3rem;
  }

  .backArea {
    margin-left: 3rem;
  }

  .backArea_title {
    width: 60vw;
  }

  .descriptionArea_text {
    width: 80vw;
  }
}

@media (max-width: 1201px) and (min-width: 480px) {
  .card {
    width: 50vw;
  }
}
</style>
