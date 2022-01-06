const imgArray = [
    {
        imgSrc: "./img/watch1.jpg",
        alt: "wtach1",
        title: "Watch1"
    },
    {
        imgSrc: "./img/bracelet.jpg",
        alt: "bracelet",
        title: "Bracelet"
    },
    {
        imgSrc: "./img/shoes1.jpg",
        alt: "shoes1",
        title: "shoes"
    },
    {
        imgSrc: "./img/perfume1.jpg",
        alt: "perfume",
        title: "perfume"
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
            addImage(i)
        console.log('hello')
        const prev = document.getElementById('prev');
        
        prev.addEventListener('click', () =>{
            addImage(i--)
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

  