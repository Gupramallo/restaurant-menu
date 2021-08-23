const pizza = document.querySelector("#pizza");
const desserts = document.querySelector("#desserts");
const drinks= document.querySelector('#drinks');



document.addEventListener('DOMContentLoaded', async()=>{
   await cargarMenu(dbPizzas,pizza);
   await cargarMenu(dbDrinks,drinks);
   await cargarMenu(dbDesserts,desserts);
});



function alert(allergen) {
    const imgUrl=`img/allergens/${allergen}.png`;
    const upper =allergen.charAt(0).toUpperCase()+ allergen.slice(1);
    swal({
        title: upper,
        text: `Este plato contiene ${allergen}`,
        icon: imgUrl,
        button: "Ok",
      });
}

function Mayuscula(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1);
  }

function cargarMenu(data,menu) {
    
    data.forEach(db => {
        let allergens='';
        
        db.allergens.forEach(a =>{
            allergens+= `<img src="img/allergens/${a}.png" class="icon" alt="${a}" value="${a}}" onclick="alert('${a}')"> `;
        })
        let div = document.createElement("div");
        div.classList.add("section__card");
        div.innerHTML = `
         <h3 class="section__title">${db.name}</h3>
                       <div class="section__info">
                           <p class="section__text">${db.text}</p> 
                           <img class="section__img" src="${db.img}" alt="${db.alt}">     
                       </div>
                       
                       <div class="allergens">
                        ${allergens}
                        </div> 
   `;
   menu.appendChild(div);
    });
  
}


