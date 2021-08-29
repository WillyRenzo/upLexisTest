<template>
  <section>
    <div class="header">
      <div class="header_container">
        <div v-for="i in [currentIndex]" :key="i">
          <img :src="currentImg" class="header_BackgroundImage" />
        </div>
        <div v-for="i in [currentLogo]" :key="i">
          <p class="header_logoArea">
            <img :src="currentLogo" alt="" />
            <span class="header_logoArea_product">| Histórico Empresarial</span>
          </p>
        </div>
        <p class="header_subtitleArea">
          O aplicativo Histórico Empresarial permite ao usuário ter acesso a
          todos os fatos e acontecimentos relevantes de uma empresa desde o seu
          ano de fundação.
        </p>
        <div class="header_actionArea">
          <p>R$ <span class="coin">40.00</span></p>
          <button class="btn_learnMore">Saiba Mais</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/headerprincipal.jpg"),
        require("@/assets/images/headersecundario.jpg"),
      ],
      logos: [
        require("@/assets/images/logoupminer.png"),
        require("@/assets/images/logoupMinerSec.png"),
      ],
      timer: null,
      currentIndex: 0,
      currentIndex2: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
      this.currentIndex2 += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
      this.currentIndex2 += 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
        
    },
    currentLogo: function() {
      return this.logos[Math.abs(this.currentIndex2) % this.logos.length];
    }
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 31vh;
  background: var(--primary_linearGradient);
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.header {
  color: #f0690a;
  display: flex;
  text-align: start;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background: transparent;
  position: absolute;
}

.header_BackgroundImage {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 34.5vh;
  object-fit: fill;
}

.header_container {
  width: 50%;
  padding: 80px;
  position: relative;
  left: 0;
  top: -15%;
}

.header_logoArea {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}

.header_logoArea_product {
  font-size: 2rem;
  padding-left: 1rem;
}

.header_subtitleArea {
  font-size: 1.2rem;
  font-family: Roboto Light, sans-serif;
  color: #b0b0b0;
  width: 35vw;
  margin-bottom: 1.5rem;
  position: relative;
}

.header_actionArea {
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
}

.coin {
  font-size: 2rem;
}

.btn_learnMore {
  font-family: Robot, sans-serif;
  font-weight: bold;
  margin-left: 2rem;
  height: 2rem;
  width: 7rem;
  border: none;
  border-radius: 5px;
  background: var(--primary_linearGradient);
  color: #fff;
  cursor: pointer;
}

@media (max-width: 481px) {
  section {
    height: 52vh;
  }

  .header {
    height: 51vh;
  }

  .header_BackgroundImage {
    height: 58vh;
    object-fit: cover;
  }

  .header_logoArea {
    flex-direction: column;
    margin-top: 2rem;
  }

  .header_logoArea_product {
    margin-top: 2rem;
    margin-left: 3rem;
    width: 60vw;
  }

  .header_subtitleArea {
    width: 50vw;
  }
}

@media (max-width: 1201px) and (min-width: 480px) {
  section {
    height: 36vh;
  }

  .header {
    height: 35vh;
  }

  .header_BackgroundImage {
    height: 40vh;
    object-fit: cover;
  }

  .header_logoArea {
    margin-top: 2rem;
  }
}
</style>
