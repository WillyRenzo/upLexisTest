<template>
  <section>
    <div class="header">
      <div class="header_container">
        <p class="header_logoArea">
          <img src="../assets/images/logoupMinerSec.png" alt="" />
          <span class="header_logoArea_product">| Histórico Empresarial</span>
        </p>
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
  props: {
    title: String,
    text: String,
    price: Number,
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
  color: #231f1f;
  display: flex;
  text-align: start;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background-image: url(../assets/images/headersecundario.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
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

.header_logoArea img {
    color: #5a5a61;
}

.header_logoArea_product {
  font-size: 2rem;
  padding-left: 1rem;
}

.header_subtitleArea {
  font-size: 1.2rem;
  font-family: Roboto Light, sans-serif;
  color: #696969;
  width: 35vw;
  margin-bottom: 1.5rem;
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

@media (max-width: 480px) {
  section {
    height: 46vh;
  }

  .header {
    height: 45vh;
  }
}

@media (min-width: 480px) {
  section {
    height: 41vh;
  }

  .header {
    height: 40vh;
  }
}

@media (min-width: 800px) {
  section {
    height: 36vh;
  }

  .header {
    height: 35vh;
  }
}

@media (min-width: 1200px) {
  section {
    height: 32vh;
  }

  .header {
    height: 31vh;
  }
}
</style>
