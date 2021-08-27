<template>
  <section>
    <div class="carrousel_container">
        <div class="carrousel_leftArrow">
            <font-awesome-icon :icon="['fa', 'arrow-left']"/>
        </div>
        <div class="carrousel_item">
            <img src="../assets/images/carrousel_item.jpeg" alt="" class="carrousel_item_img">
            <p class="carrousel_item_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi sed in nisi quos soluta deleniti officiis ducimus velit veritatis.</p>
        </div>
        <div class="carrousel_item">
            <img src="../assets/images/carrousel_item.jpeg" alt="" class="carrousel_item_img">
            <p class="carrousel_item_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi sed in nisi quos soluta deleniti officiis ducimus velit veritatis.</p>
        </div>
        <div class="carrousel_rightArrow">
            <font-awesome-icon :icon="['fa', 'arrow-right']"/>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.carrousel_container {
    width: 80vw;
    display: flex;
    align-items: center;
}

.carrousel_item {
    width: 1000px;
    -webkit-box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
    box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
    margin: 1rem 5rem 1rem;
}

.carrousel_leftArrow {
    font-size: 2rem;
    color: #797979;
}

.carrousel_rightArrow {
    font-size: 2rem;
    color: #797979;
}

.carrousel_item  .carrousel_item_img {
    width: 95%;
    padding: 1rem 1rem 1rem;
    object-fit: fill;
}

.carrousel_item p {
    padding: 0 3rem 1rem;
    color: #f0690a;
}

</style>
