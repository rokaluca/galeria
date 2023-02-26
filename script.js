let data = {
    photo: 'kepek/1903.jpg',
    title: 'Elso',
    description: 'Ez bizony az elso kep'
    };

    $('#photo').attr('src', data.photo);
   $('#photo-title').text(data.title)
   $('#photo-description').text(data.description)

let currentPhoto = 0;
let imagesData =[
    {
    photo: 'kepek/1903.jpg',
    title: 'Elso',
    description: 'Ez bizony az elso kep'
    },
    {
    photo: 'kepek/27193.jpg',
    title: 'Masodik',
    description: 'Ez bizony az masodik kep'
    },
    {
    photo: 'kepek/141714.jpg',
    title: 'Harmadik',
    description: 'Ez bizony az harmadik kep'
    },
    {
    photo: 'kepek/280700.jpg',
    title: 'Negyedik',
    description: 'Ez bizony az negyedik kep'
    },
    {
    photo: 'kepek/4517383.jpg',
    title: 'Otodik',
    description: 'Ez bizony az otidik kep'
    },
    {
    photo: 'kepek/154.webp',
    title: 'Hatodik',
    description: 'Ez bizony az hatodik kep'
    },
]


let loadPhoto = (currentPhoto) => {
$('#photo').attr('src', imagesData[currentPhoto].photo)
$('#photo-title').text(imagesData[currentPhoto].title)
$('#photo-description').text(imagesData[currentPhoto].description)
}

$('#jobbnyil').click(() => {
    if(currentPhoto < 5) { 
      currentPhoto++; 
    }
    else{
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
  });
  
  $('#balnyil').click(() => {
    if(currentPhoto >0) {
      currentPhoto--;  
    }
    else{
        currentPhoto=5;
    }
    loadPhoto(currentPhoto);
  });

['elsokep', 'masodikkep', 'harmadikkep', 'negyedikkep', 'otodikkep', 'hatodikkep'].forEach((kep, index) => {
  $(`#${kep}`).click(() => {
    currentPhoto=index;
    loadPhoto(currentPhoto);
  })
})


