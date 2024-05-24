// const cursosTop = document.getElementById('cursosTop')
// const cursosBottom = document.getElementById('cursosBottom')


// window.onload = function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'http://localhost:3000/categories');
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText)
//         renderHTML(ourData)
//         renderHTML2(ourData)
//     }
//     ourRequest.send()
//     console.log('disparo a função')
// }
// function renderHTML(data) {
//     var htmlString = "";
//     data[0].courses.forEach(function(course) {
//         htmlString += `<a href="${course.link}" class="cursoCampo">
//             <img src="${course.img}" alt="">
//             <h1>${course.title}</h1>
//             <p>${course.description}</p>
//             <p>${course.author}</p>
//         </a>`;
//     });
//     cursosTop.insertAdjacentHTML('beforeend', htmlString);
// }
// function renderHTML2(data) {
//     var htmlString2 = "";
//     data[1].courses.forEach(function(course) {
//         htmlString2 += `<a href="${course.link}" class="cursoCampo">
//             <img src="${course.img}" alt="">
//             <h1>${course.title}</h1>
//             <p>${course.description}</p>
//             <p>${course.author}</p>
//         </a>`;
//         console.log(`${course.title}`);
//     });
//     cursosBottom.insertAdjacentHTML('beforeend', htmlString2);
// }

// let isDown = false;
// let startX;
// let scrollLeft;

// const sliderArea = document.getElementById('sliderArea');

// sliderArea.addEventListener('mousedown', (e) => {
//     isDown = true;
//     startX = e.pageX - sliderArea.offsetLeft;
//     scrollLeft = sliderArea.scrollLeft;
// });

// sliderArea.addEventListener('mouseleave', () => {
//     isDown = false;
// });

// sliderArea.addEventListener('mouseup', () => {
//     isDown = false;
// });

// sliderArea.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - sliderArea.offsetLeft;
//     const walk = (x - startX) * 2;
//     sliderArea.scrollLeft = scrollLeft - walk;
// });


            
    

    
    