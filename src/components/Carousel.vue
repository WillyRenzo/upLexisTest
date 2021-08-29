<template>
  <div>
    <div class="card-carousel">
      <ArrowButton
        arrowType="left"
        @click.native="showPrevElement"
        :disabled="this.reachedMaxLeft"
      />
      <Card
        class="current-element"
        :headline="currentElement.headline"
        :text="currentElement.text"
      />
      <Card
        class="current-element"
        :headline="secondCurrentElement.headline"
        :text="secondCurrentElement.text"
      />
      <ArrowButton
        arrowType="right"
        @click.native="showNextElement"
        :disabled="this.reachedMaxRight"
      />
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import ArrowButton from "./ArrowButton.vue";

export default {
  name: "Carousel",
  props: { cards: Array },
  components: { Card, ArrowButton},

  data() {
    return {
      currentElementIndex: 0,
      secondCurrentElementIndex: 1
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    secondCurrentElement() {
      return this.cards[this.secondCurrentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0 && this.secondCurrentElement === 1;
    },
    reachedMaxRight() {
      return this.secondCurrentElementIndex === this.cards.length - 1;
    }
  },
  methods: {
    showNextElement() {
      this.currentElementIndex+= 2;
      this.secondCurrentElementIndex+= 2;
    },
    showPrevElement() {
      this.currentElementIndex-= 2;
      this.secondCurrentElementIndex-= 2;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
      this.secondCurrentElementIndex = elementIndex++;
    }
  }
};
</script>

<style scoped>
.card-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.carrousel_container {
  width: 80vw;
  display: flex;
  align-items: center;
}

.carrousel_leftArrow {
  font-size: 2rem;
  color: #797979;
}

.carrousel_rightArrow {
  font-size: 2rem;
  color: #797979;
}

@media (max-width: 480px) {
  .card-carousel {
    flex-direction: column;
  }
}
</style>