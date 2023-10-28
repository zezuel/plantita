let boton1=document.querySelector('.bot1');

let nuevo=document.querySelector('div');
var tren=['https://www.lostiempos.com/sites/default/files/698600.jpg','https://www.opinion.com.bo/media/opinion/images/2013/07/01/2013N99136.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRY028Jwe8BaafwUfE5tXMV5E0Yc6QGvM09vcjyHblDm72f73g-oCoA1heFOTt0Jf5TQ&usqp=CAU','','https://www.ciudadciencia.es/wp-content/uploads/2016/05/20160416-Patricia-01r-Eucalipto.jpg','https://gmsantacruz.gob.bo/gestion/_activos-municipales/img/arboles-en-mi-ciudad/tajibo-morado-01.jpg','https://px.cdn.reduno.com.bo/reduno/102020/1601909082553/120749141_186718126246389_4680601933843873578_n.webp?cw=400&ch=225&extw=jpg' ]

boton1.addEventListener('click', function () {

for (let k=0;k<11;k++){
    let contenido=document.createElement('img')
contenido.src=tren[k]
nuevo.appendChild(contenido)
    console.log('hola')
}
})


