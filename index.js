const imgArray = [

    {
       
        imgSrc : "./img2/perfume1.jpg",
        alt : "perfume",
        title: "Aqua Di Gio POUR HOMME Perfume",
       
    },
    {
      
        imgSrc : "./img2/perfume2.jpg",
        alt : "perfume",
        title: "Versace EROS perfume",
      
    },
    {
    
        imgSrc : "./img2/glass1.jpg",
        alt : "Glass",
        title: "Glasses",
     
    },
    {
        
        imgSrc : "./img2/bracelet.jpg",
        alt : "Bracelet",
        title: "Brcelet",
   
    },
    {
 
        imgSrc : "./img2/shoes1.jpg",
        alt : "Shoes",
        title: "Brown Sneakers",
     
    },
    {
        
        imgSrc : "./img2/knife.jpg",
        alt : "knife",
        title: "Combat Knife",
  
    },
    {
  
        imgSrc : "./img2/glass2.jpg",
        alt : "glasses",
        title: "glasses",
    
    },
    {
       
        imgSrc : "./img2/shoes3.jpg",
        alt : "Shoes",
        title: "Formal Shoes",
 
    },
    {
        imgSrc : "./img2/shoes2.jpg",
        alt : "Shoes",
        title: "Chelsea Boots",
     
    },
    {
   
        imgSrc : "./img2/glass5.jpg",
        alt : "Glasses",
        title: "Sunglasses",
     
    },
    {
       
        imgSrc : "./img2/watch1.jpg",
        alt : "Watch",
        title: "Analog Watch",
    
    },
    {
     
        imgSrc : "./img2/perfume3.jpg",
        alt : "perfume",
        title: "Diesel Fuel For Life Perfume",
    
    },
    {
     
        imgSrc : "./img2/bracelet1.jpg",
        alt : "Bracelet",
        title: "Bracelet",
        
    },
    {
     
        imgSrc : "./img2/watch2.jpg",
        alt : "Watch",
        title: "Analog Watch",
       
    }
]


const gridContainer = document.querySelector(".image_gridContainer");
const modal = document.querySelector('.modal');


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



    function addImage(e){
        const modal_image = document.querySelector('.modal_image');
        const imageTitle = document.getElementById('imageTitle');
        modal_image.innerHTML = `<img src= ${imgArray[e].imgSrc} alt = ${imgArray[e].alt}/>`
        imageTitle.innerHTML = imgArray[e].title
       
    }
    




    imageCard.addEventListener('click', () =>{

        
        modal.style.display = "flex";
            addImage(i)
        console.log('hello')


        let prev = document.querySelector('.prev');


        let next = document.querySelector('.next');

        

        prev.addEventListener('click', () =>{
            i -= 1;

            if(i>=0){
                addImage(i)
                next.style.display ="flex"
           
            }
            if(i<0){
                prev.style.display = "none";
            }
        })

    
    
        
       
      



        next.addEventListener('click', () =>{
            i += 1;

            if(i<=imgArray.length-1){
                addImage(i)
                prev.style.display ="flex"
            }
            if(i>imgArray.length-1){
                next.style.display ="none"
            }
        })


    })

    const closeModalBtn = document.querySelector('.closeModal');
    closeModalBtn.addEventListener('click', () =>{
        modal.style.display = "none";
    })
   





  
}





    // let imageCard = document.querySelector('.image_card')


    

  

  