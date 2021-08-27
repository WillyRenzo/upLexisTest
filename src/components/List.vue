<template>
  <section>
    <div class="orderArea">
      <span>Ordenar</span>
      <select name="select" @change="onChange($event)" id="order">
        <option value="lancamento">Lançamento</option>
        <option value="price">Preço</option>
      </select>
    </div>
    <div class="list">
      <div class="list_item" v-for="( { id, icon, title, text, price, date}) in list" :key="id">
        <div class="list_item_description">
          <font-awesome-icon
            :icon="icon"
            class="list_item_icon"
          />
          <span class="list_item_title" ref="list_item_title">{{ title }}</span>
          <p class="list_item_text">
            {{ text }}
          </p>
          <p class="list_item_date">
              {{ date }}
          </p>
        </div>
        <div class="list_item_actions">
          <span class="value">R${{ price ? price : 0}}</span>
          <button class="btn_learnMore" @click="showDetails(title, text, price)" :title="title" :text="text" :price="price">Saiba Mais</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sortBy from 'sort-by';

export default {
  data() {
    return {
        list: [
            {
                id: "1",
                icon: "suitcase",
                title: "Profissional",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 29.99,
                date: '30/01/2000'
            },
            {
                id: "2",
                icon: "university",
                title: "Reguladores",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 19.99,
                date: '21/01/2000'
            },
            {
                id: "3",
                icon: "tree",
                title: "Sócio Ambiental",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 1.99,
                date: '22/01/2000'
            },
            {
                id: "4",
                icon: "gavel",
                title: "Jurídico",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 2.99,
                date: '23/01/2000'
            },
            {
                id: "5",
                icon: "ban",
                title: "Listas Restritivas",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 100,
                date: '24/01/2000'
            },
            {
                id: "6",
                icon: "globe-americas",
                title: "Mídia/Internet",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 100,
                date: '25/01/2000'
            },
            {
                id: "7",
                icon: "gem",
                title: "Bens e Imóveis",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 100,
                date: '26/01/2000'
            },
            {
                id: "8",
                icon: "male",
                title: "Cadastro",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 100,
                date: '27/01/2000'
            },
            {
                id: "9",
                icon: "piggy-bank",
                title: "Financeiro",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate aliquid et facilis dolore suscipit perspiciatis amet, illum cupiditate voluptas.",
                price: 100,
                date: '28/01/2000'
            }
        ]
    };
  },
  methods: {
      onChange(e) {
          if (e.target.value === 'price') {
              this.list.sort(sortBy('price'));
          }
          if (e.target.value === 'lancamento'){
              this.list.sort(sortBy('date'));
          }
      },
      showDetails(title, text, price) {
          this.$router.push({ path: 'product', query: { title: title, text: text, price: price } });
          console.log('alo');
      }
  },
};
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.orderArea {
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
}

.orderArea > span {
    text-transform: uppercase;
    font-weight: bold;
    font-family: Roboto Regular;
}

#order {
  margin-left: 1rem;
  width: 10vw;
  height: 2.5vh;
}

.list {
  width: 100vw;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.list_item {
  width: 20vw;
  height: 40vh;
  border-radius: 5px;
  -webkit-box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
  box-shadow: -1px -1px 13px 1px rgba(125, 125, 125, 0.75);
  display: flex;
  margin: auto 1rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.list_item .list_item_description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.list_item .list_item_icon {
  color: #f0690a;
  padding-top: 20%;
  font-size: 2rem;
  margin-bottom: 1rem;
}


.list_item .list_item_title {
  font-family: Roboto Regular;
  font-size: 1.5rem;
}

.list_item .list_item_text {
    margin: 1rem 2rem 0;
  font-family: Roboto Medium;
  font-size: 1rem;
  color: #b0b0b0;
}

.list_item .list_item_actions {
  background: var(--primary_linearGradient);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem;
  border-radius: 0 0 5px 5px;
}

.value {
  color: #fff;
  font-size: 1rem;
}

.btn_learnMore {
  font-family: Roboto, sans-serif;
  font-weight: bold;
  margin-left: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}

.hidden {
    display: none;
}
</style>
