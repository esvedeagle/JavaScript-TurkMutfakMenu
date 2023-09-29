const menu = [
  {
    id: 1,
    title: "Etliekmek",
    category: "Konya",
    price: 50.99,
    img:
      "images/Etliekmek.jpg",
    desc: `İnce kıyılmış kıyma, soğan ve biber ile.`,
  },
  {
    id: 2,
    title: "Şiveydiz",
    category: "Gaziantep",
    price: 20.99,
    img:
      "images/şiveydiz.jpg",
    desc: `Şiveydiz kuzu eti, taze sarımsak ve nohut ile hazırlanır. Özellikle Nisan ve Mayıs aylarında tüketilen şiveydiz, pırasa ve farklı baharatlarla zenginleştirilir. `,
  },
  {
    id: 3,
    title: "Tirit",
    category: "Konya",
    price: 30.99,
    img:
      "images/tirid.jpg",
    desc: `Kuşbaşı et, tandır ekmeği, süzme yoğurt ve sebzeler`,
  },
  {
    id: 4,
    title: "Cağ Kebabı",
    category: "Erzurum",
    price: 55.99,
    img:
      "images/cağkebabı.jpg.webp",
    desc: `Erzurum yöresine özgü bir lezzet olan cağ kebabı, kuzu eti veya oğlaktan yapılır. Türk mutfağında önemli bir yere sahip olan bu kebap, önceden terbiye edilen et şişe geçirilerek yatay bir şekilde pişirilir. Odun ateşinde pişirilen bu kebabın ismi, cağ adı verilen şişlerden gelmektedir. `,
  },
  {
    id: 5,
    title: "Kesme Aşı",
    category: "Erzurum",
    price: 32.99,
    img:
      "images/kesmeaşı.webp",
    desc: `El açması hamur ve isteğe göre kıyma ile hazırlanan bu çorbanın eşsiz bir lezzeti vardır.`,
  },
  {
    id: 6,
    title: "Antep Kebabı",
    category: "Gaziantep",
    price: 30.99,
    img:
      "images/antepkebabı.jpg",
    desc: `Antep mutfağında birbirinden farklı kebaplara rastlamak mümkündür. Bunlardan biri de kuzu eti, közlenmiş biber ve soğan ile hazırlanan Antep kebabıdır. Hazırlanan kebap, nefis bulgur pilavı ile birlikte sunulur.`,
  },
  {
    id: 7,
    title: "Tandır Kebabı",
    category: "Konya",
    price: 45.99,
    img:
      "images/tandır.jpg",
    desc: `Yöreye ait süt kuzusunun ön kol tabir edilen kısmının  sadece tuz ve kendi yağında 2 saat kızartılır. Daha sonra 4 saat de fırında pişmesi ile yaklaşık 6 saatde hazırlanarak lokum kıvamına getirilir. Turnaklı pide ve soğan ile sunulur `,
  },
  {
    id: 8,
    title: "Çiriş Otu Yemeği",
    category: "Erzurum",
    price: 22.99,
    img:
      "images/cirisotu.webp",
    desc: `Vitamin bakımından zengin olan bu besin; pilav, börek, çorba ve sulu yemeklerde kullanılır. Antioksidan özelliği sayesinde vücudun hastalık direncini arttırır. Romatizma ve kronik ağrıların tedavisinde kullanılır. Demir bakımından zengin olduğu için, kansızlığa ve saç dökülmelerine karşı olumlu bir etkisi vardır. `,
  },
  {
    id: 9,
    title: "Katmer",
    category: "Gaziantep",
    price: 33.99,
    img:
      "images/katmer.jpg",
    desc: `Nefis mi nefis katmer tatlısına kim hayır diyebilir ki? Çıtır çıtır yufkası ve bol fıstıklarıyla Antep sokaklarında en çok rastlanan tatlılardan biri de katmerdir. Genellikle kaymak veya dondurma ile birlikte sunulur.`,
  },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["Hepsi"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Hepsi") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
