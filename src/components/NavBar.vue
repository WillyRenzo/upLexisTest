<template>
  <section>
    <ul class="navbar">
      <li
        class="navbar_item"
        v-for="{ id, icon, title } in list"
        :key="id"
        @click="setActive()"
      >
        <font-awesome-icon :icon="icon" class="navbar_icon" />
        <span class="navbar_text" ref="navbar_title">{{ title }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      list: [
        {
          id: "0",
          icon: "globe",
          title: "Todos",
        },
        {
          id: "1",
          icon: "suitcase",
          title: "Profissional",
        },
        {
          id: "2",
          icon: "university",
          title: "Reguladores",
        },
        {
          id: "3",
          icon: "tree",
          title: "Sócio Ambiental",
        },
        {
          id: "4",
          icon: "gavel",
          title: "Jurídico",
        },
        {
          id: "5",
          icon: "ban",
          title: "Listas Restritivas",
        },
        {
          id: "6",
          icon: "globe-americas",
          title: "Mídia/Internet",
        },
        {
          id: "7",
          icon: "gem",
          title: "Bens e Imóveis",
        },
        {
          id: "8",
          icon: "male",
          title: "Cadastro",
        },
        {
          id: "9",
          icon: "piggy-bank",
          title: "Financeiro",
        },
      ],
      completedList: [
        {
          id: "0",
          icon: "globe",
          title: "Todos",
        },
        {
          id: "1",
          icon: "suitcase",
          title: "Profissional",
        },
        {
          id: "2",
          icon: "university",
          title: "Reguladores",
        },
        {
          id: "3",
          icon: "tree",
          title: "Sócio Ambiental",
        },
        {
          id: "4",
          icon: "gavel",
          title: "Jurídico",
        },
        {
          id: "5",
          icon: "ban",
          title: "Listas Restritivas",
        },
        {
          id: "6",
          icon: "globe-americas",
          title: "Mídia/Internet",
        },
        {
          id: "7",
          icon: "gem",
          title: "Bens e Imóveis",
        },
        {
          id: "8",
          icon: "male",
          title: "Cadastro",
        },
        {
          id: "9",
          icon: "piggy-bank",
          title: "Financeiro",
        },
      ],
    };
  },
  methods: {
    setActive() {
      const items = document.querySelectorAll(".navbar_item");

      items.forEach((item) => {
        item.addEventListener("click", () => {
          this.removeActiveClasses(items);
          item.classList.add("navbar_item--active");
          this.filterByNavbarItem(item);
        });
      });
    },

    removeActiveClasses(items) {
      items.forEach((item) => {
        item.classList.remove("navbar_item--active");
      });
    },

    removeHiddenClasses(items) {
      items.forEach((item) => {
        item.classList.remove("hidden");
      });
    },

    filterByNavbarItem(item) {
      const listItems = document.querySelectorAll(".list_item");

      this.removeHiddenClasses(listItems);

      if (item.children[1].innerHTML === "Todos") {
        this.removeHiddenClasses(listItems);
      }

      listItems.forEach((listItem) => {
        let title = listItem.innerText.split("\n", 1);

        if (item.children[1].innerHTML === "Todos") {
          this.removeHiddenClasses(listItems);
        }

        if (item.children[1].innerHTML === title[0].trim()) {
          listItem.classList.remove("hidden");
        } else {
          listItem.classList.add("hidden");
        }
      });
    },
  },
};
</script>

<style>
* {
  font-family: Roboto Regular, sans-serif;
}

.navbar {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 5px;
  padding: 0;
  width: 100vw;
}

.navbar_item {
  width: 7rem;
  height: 2rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  cursor: pointer;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.navbar_item.navbar_item--active {
  outline: none;
  background-color: #f0690a;
  color: #fff;
}

.navbar_text {
  padding-top: 0.5rem;
}

.navbar_icon {
  background: linear-gradient(--primary_linearGradient);
}

@media (max-width: 481px) {
  .navbar {
    flex-wrap: wrap;
  }
  .navbar_item {
    width: 7rem;
    height: 2rem;
  }
}

@media (max-width: 1201px) and (min-width: 480px) {
  .navbar {
    flex-wrap: wrap;
  }
  .navbar_item {
    width: 5rem;
    height: 2rem;
  }
}
</style>
