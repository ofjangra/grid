const imgArray = [

    {
       
        imgSrc : "./img/perfume1.jpg",
        alt : "perfume",
        title: "Aqua Di Gio POUR HOMME Perfume",
       
    },
    {
      
        imgSrc : "./img/perfume2.jpg",
        alt : "perfume",
        title: "Versace EROS perfume",
      
    },
    {
    
        imgSrc : "./img/glass1.jpg",
        alt : "Glass",
        title: "Glasses",
     
    },
    {
        
        imgSrc : "./img/bracelet.jpg",
        alt : "Bracelet",
        title: "Brcelet",
   
    },
    {
 
        imgSrc : "./img/shoes1.jpg",
        alt : "Shoes",
        title: "Brown Sneakers",
     
    },
    {
        
        imgSrc : "./img/knife.jpg",
        alt : "knife",
        title: "Combat Knife",
  
    },
    {
  
        imgSrc : "./img/glass2.jpg",
        alt : "glasses",
        title: "glasses",
    
    },
    {
       
        imgSrc : "./img/shoes3.jpg",
        alt : "Shoes",
        title: "Formal Shoes",
 
    },
    {
        imgSrc : "./img/shoes2.jpg",
        alt : "Shoes",
        title: "Chelsea Boots",
     
    },
    {
   
        imgSrc : "./img/glass5.jpg",
        alt : "Glasses",
        title: "Sunglasses",
     
    },
    {
       
        imgSrc : "./img/watch1.jpg",
        alt : "Watch",
        title: "Analog Watch",
    
    },
    {
     
        imgSrc : "./img/perfume3.jpg",
        alt : "perfume",
        title: "Diesel Fuel For Life Perfume",
    
    },
    {
     
        imgSrc : "./img/bracelet1.jpg",
        alt : "Bracelet",
        title: "Bracelet",
        
    },
    {
     
        imgSrc : "./img/watch2.jpg",
        alt : "Watch",
        title: "Analog Watch",
       
    }
]


const gridContainer = document.querySelector(".image_gridContainer");

for(let i=0; i<=imgArray.length-1; i++){
    const imageCard = document.createElement('div');
    imageCard.classList.add('image_card');
    const cradContent = `<div class = "card_image">
                            <img src = ${imgArray[i].imgSrc} alt = ${imgArray[i].alt} class = "card_image"/>
                            </div>
                            <div class="card_title">
                                <p>${imgArray[i].title}</p>
                        </div`

    imageCard.insertAdjacentHTML('afterbegin', cradContent);
    gridContainer.appendChild(imageCard);



    




    imageCard.addEventListener('click', () =>{

        const modal = document.querySelector('.modal');
        modal.style.display = "flex";
            addImage(i)
        console.log('hello')
        const prev = document.getElementById('prev');
        
        prev.addEventListener('click', () =>{
            
            if(i >=0 ){
                addImage(i--)
            }
        })
       
    })
}




    // let imageCard = document.querySelector('.image_card')


    

    function addImage(e){
        const modal_image = document.querySelector('.modal_image');
        const imageTitle = document.getElementById('imageTitle');
        console.log( imgArray)
        modal_image.innerHTML = `<img src= ${imgArray[e].imgSrc} alt = ${imgArray[e].alt}/>`
        imageTitle.innerHTML = imgArray[e].title
       
    }

  