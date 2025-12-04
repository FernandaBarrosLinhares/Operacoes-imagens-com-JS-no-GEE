// Instancie uma imagem com o construtor Image. Digite, na guia Docs, para
//saber o que é possível fazer com ee.Image.

//Neste exercicio, estamos criando uma u=imagem e não uma coleção de imagens.

//Cria uma variavél usando o construtor Image 

var image = ee.Image('CGIAR/SRTM90_V4');

// Zoom para uma localização,obtida usando a ferramenta marcador no mapa.

Map.setCenter(-52.16111746507226,-26.82068809664134, 11); // Domo de
//Vargeão/SC.

// Mostrando a  imagem no mapa adicionando a camada image, e definindo a altura no mapa.

//Map.addLayer(image);
//Map.addLayer(image, {min: 0, max: 3000}, 'visualização customizada');

//As cores podem ser especificadas por nome ou como sequências
//hexadecimais

//Map.addLayer(image, {min: 500, max: 1300, palette: ['blue', 'green', 'red', 'yellow']}, 'paletacustomizada');

//Cálculos usando imagens:
// Mostre a imagem SRTM.



// Aplicando um algoritmo para a imagem. SRTM é o argumento para o algoritmo.

var srtm = ee.Image('CGIAR/SRTM90_V4');
var slope = ee.Terrain.slope(srtm);

// Mostre o resultado.

Map.addLayer(slope, {min: 0, max :60}, 'declividade');

//Map.setCenter(-52.16111746507226,-26.82068809664134, 11); // Domo de
//Vargeão/SC.


//Álgebra de mapas (matemática de bandas ou matemática de imagem):
// Obter o aspecto (em graus).

  var aspecto = ee.Terrain.aspect(srtm);

// Converter para radianos e encontrar o seno do aspecto.

var senoImagem = aspecto.divide(180).multiply(Math.PI).sin();

// Mostrar o resultado.

Map.addLayer(senoImagem, {min: -1, max: 1}, 'sen');

// Estatísticas de imagem:
// Calcular a média de elevação em um polígono.


var meanDict = srtm.reduceRegion({
  reducer: ee.Reducer.mean(),
 geometry: poligono2,
 scale: 90
});
// Obter a média e mostrar no Console.
var mean = meanDict.get('elevation');
print('Mean elevation', mean);


