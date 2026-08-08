const fadeElements = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
fadeElements.forEach(element=>{
  observer.observe(element);
});

/*メニューの追加はここに入力*/

const menus = {
    pizza:[
        {
            name:"マルゲリータ",
            price:"¥1,200",
            image:"img/marugeri.jpg"
        },
        {
            name:"ペパロニ",
            price:"¥1,100",
            image:"img/peparoni.jpg"
        },
        {
            name:"ペスカトーレ",
            price:"¥1,500",
            image:"img/kaisen.jpg"
        },
        {
            name:"マリナーラ",
            price:"¥1,500",
            image:"img/antyobi.jpg"
        },
        {
            name:"ビスマルク",
            price:"¥1,500",
            image:"img/bisumaruku.jpg"
        },
        {
            name:"パルマ",
            price:"¥1,500",
            image:"img/rukkora.jpg"
        }
    ],
    side:[
        {
            name:"フライドポテト",
            price:"¥500",
            image:"img/poteto.jpg"
        },
        {
            name:"シーザーサラダ",
            price:"¥700",
            image:"img/sizasarada.jpg"
        },
        {
            name:"カルパッチョ",
            price:"¥650",
            image:"img/karupatyo.jpg"
        },
        {
            name:"ガーリックシュリンプ",
            price:"¥650",
            image:"img/syurinpu.jpg"
        },
        {
            name:"アヒージョ",
            price:"¥650",
            image:"img/ahizyo.jpg"
        }
    ],
    drink:[
        {
            name:"ウーロン茶",
            price:"¥350",
            image:"img/urontya.jpg"
        },
        {
            name:"オレンジ",
            price:"¥400",
            image:"img/orenzi01.jpg"
        },
        {
            name:"レモネード",
            price:"¥400",
            image:"img/remonedo01.jpg"
        },
        {
            name:"ワイン",
            price:"¥350",
            image:"img/wain01.jpg"
        },
        {
            name:"コーヒー",
            price:"¥400",
            image:"img/kohi01.jpg"
        }
    ]
};

const menuList=document.getElementById("menu-list");
function showMenu(category){
    if (!menuList){
        return;
    }
    menuList.innerHTML="";
    const section=document.createElement("div");
    section.className="menu-category";
    section.innerHTML=`<h3>${getTitle(category)}</h3>`;
    const items=document.createElement("div");
    items.className="menu-items";
    menus[category].forEach(menu=>{
        items.innerHTML+=`
        <div class="menu-card">
            <img src="${menu.image}" alt="${menu.name}">
            <h4>${menu.name}</h4>
            <p>${menu.price}</p>
        </div>
        `;
    });
    section.appendChild(items);
    menuList.appendChild(section);
}

function getTitle(category){
    if(category==="pizza") return "ピザ";
    if(category==="side") return "サイド";
    return "ドリンク";
}

showMenu("pizza");
document.querySelectorAll(".menu-buttons button").forEach(button=>{
    button.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");
        showMenu(button.dataset.category);
    });
});

/*お知らせの追加はここに入力*/

const newsData = [
  {
    date: "2026.08.08",
    category: "営業情報",
    title: "営業時間変更のお知らせ",
    detail: "8月13日は営業時間を11時から20時までとさせていただきます。ご理解のほどお願いいたします。"
  },
  {
    date: "2026.07.30",
    category: "お知らせ",
    title: "新メニュー登場のお知らせ",
    detail: "魚介をたっぷり使用した「ペスカトーレ」が新メニューとして加わりました。海の幸の旨みをぜひお楽しみください。"
  },
  {
    date: "2026.07.10",
    category: "営業情報",
    title: "臨時休業のお知らせ",
    detail: "店舗設備点検のため、7月15日は臨時休業とさせていただきます。"
  },
  {
    date: "2026.07.08",
    category: "お知らせ",
    title: "一部ピザ販売終了のお知らせ",
    detail: "ご好評いただいております「クアトロフォルマッジ」は、今月末をもちまして販売を終了いたします。これまで多くのお客様にお楽しみいただき、誠にありがとうございました。"
  },
  {
    date: "2026.04.06",
    category: "営業情報",
    title: "臨時休業のお知らせ",
    detail: "諸事情により、5月中は臨時休業とさせていただきます。ご理解のほどよろしくお願いいたします。"
  }
];

const newsList = document.getElementById("news-list");
if (newsList) {
  newsData.forEach((news) => {
    const item = document.createElement("div");
    item.classList.add("news-item-wrap");
    item.innerHTML = `
      <div class="news-item">
        <div class="news-date">${news.date}</div>
        <div class="news-category">
          ${news.category}
        </div>
        <div class="news-title">
          ${news.title}
        </div>
        <button class="news-button">
          ― 詳しく見る
        </button>
      </div>
      <div class="news-detail">
        <p>${news.detail}</p>
      </div>
    `;
    newsList.appendChild(item);
  });
}

const newsButtons = document.querySelectorAll(".news-button");
newsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const detail = button
      .closest(".news-item-wrap")
      .querySelector(".news-detail");
    detail.classList.toggle("show");
    if (detail.classList.contains("show")) {
      button.textContent = "― 閉じる";
    } else {
      button.textContent = "― 詳しく見る";
    }
  });
});

const peopleSelect = document.querySelector("#people");
const peopleMessage = document.querySelector("#people-message");
function checkPeople() {
  const people = parseInt(peopleSelect.value);
  if (people >= 5) {
    peopleMessage.textContent =
      "5名以上の場合は、席の準備にお時間をいただく場合があります。";
  } else {
    peopleMessage.textContent = "";
  }
}
if (peopleSelect) {
  peopleSelect.addEventListener("change", checkPeople);
}

const darkModeButton = document.querySelector("#dark-mode-button");
function toggleDarkMode() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkModeButton.textContent = "☀️";
  } else {
    darkModeButton.textContent = "🌙";
  }
}
if (darkModeButton) {
  darkModeButton.addEventListener("click", toggleDarkMode);
}


console.log("JavaScriptが正常に読み込まれました");