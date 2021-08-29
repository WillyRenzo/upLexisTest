<template>
  <div class="card">
    <div class='card-content'>
      <img src="../assets/images/carrousel_item.jpeg" alt="" class="carrousel_item_img">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headline: String,
    text: String
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 40%;
  padding: 10px;
  -webkit-box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
  box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
  margin: 1rem 5rem 1rem;
}

.card-content .carrousel_item_img {
  width: 95%;
  padding: 1rem 1rem 1rem;
  object-fit: fill;
}

.card-content {
  padding: 20px;
}

.card-content p {
  padding: 0 3rem 1rem;
  color: #f0690a;
}


@media (max-width: 481px) {
  .card {
    flex-direction: column;
    width: 70vw;
  }
}

@media (max-width: 1201px) and (min-width: 480px) {
  .card {
    width: 50%;
  }
}
</style>