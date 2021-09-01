const langArr = {
    "desc-home" : {
        "ru": "Frontend разработчик middle уровня имею большое желание получить больше опыт в разработке, в вашей компании и расти как специалист в сфере веб программирования.",
        "en": "Frontend middle-level developer has a great desire to gain more experience in development, in your company and grow as a specialist in the field of web programming.",
    },

    "btn-home" : {
        "ru": "Узнать больше <span><i class=\"fas fa-arrow-right\"></i></span>",
        "en": "Learn more <span><i class=\"fas fa-arrow-right\"></i></span>",
    },
}


let translate = document.querySelector('.translate');
let allLang = ['en', 'ru'];

translate.addEventListener("change", URLlanguage);

function URLlanguage() { 
    let lang = translate.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
 }

 function changeLanguqge() { 
     let hash = window.location.hash;
     hash = hash.substr(1);
     if (!allLang.includes(hash)) {
         location.href = window.location.pathname + "#ru";
         location.reload();
     }
     translate.value = hash;
     
     for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if(elem) {
            elem.innerHTML = langArr[key][hash];
        }
     }
  }

  changeLanguqge();