const IMAGE_STUB = [
  {"name":"Sebastian Kostrubala","url":"https://picsum.photos/300?image=722"},
  {"name":"Blair Fraser","url":"https://picsum.photos/300?image=723"},
  {"name":"Nelly Volkovich","url":"https://picsum.photos/300?image=724"},
  {"name":"Caleb George","url":"https://picsum.photos/300?image=726"},
  {"name":"Devan Freeman","url":"https://picsum.photos/300?image=727"},
  {"name":"elizabeth lies","url":"https://picsum.photos/300?image=728"},
  {"name":"Vladimir Kudinov","url":"https://picsum.photos/300?image=729"},
  {"name":"Jon Eckert","url":"https://picsum.photos/300?image=73"},
  {"name":"Ryan Pohanic","url":"https://picsum.photos/300?image=730"},
  {"name":"Rob Bye","url":"https://picsum.photos/300?image=731"},
  {"name":"Dominik Schröder","url":"https://picsum.photos/300?image=732"},
  {"name":"Dominik Schröder","url":"https://picsum.photos/300?image=733"},
  {"name":"wyman H","url":"https://picsum.photos/300?image=735"},
  {"name":"Ben Dumond","url":"https://picsum.photos/300?image=736"},
  {"name":"Anthony Indraus","url":"https://picsum.photos/300?image=737"},
  {"name":"Marta Pawlik","url":"https://picsum.photos/300?image=738"},
  {"name":"Siyan Ren","url":"https://picsum.photos/300?image=739"},
  {"name":"Isaak Dury","url":"https://picsum.photos/300?image=74"},
  {"name":"Sebastien Gabriel","url":"https://picsum.photos/300?image=740"},
  {"name":"Garrett Carroll","url":"https://picsum.photos/300?image=741"},
  {"name":"Topich","url":"https://picsum.photos/300?image=386"},
  {"name":"Martin Dörsch","url":"https://picsum.photos/300?image=387"},
  {"name":"Lucas Löf","url":"https://picsum.photos/300?image=388"},
  {"name":"Jake Hills","url":"https://picsum.photos/300?image=389"},
  {"name":"Luke Chesser","url":"https://picsum.photos/300?image=39"},
  {"name":"Brooklyn Morgan","url":"https://picsum.photos/300?image=390"},
  {"name":"Sarah Holmes","url":"https://picsum.photos/300?image=391"},
  {"name":"Chris Brignola","url":"https://picsum.photos/300?image=392"},
  {"name":"Alex Talmon","url":"https://picsum.photos/300?image=393"},
  {"name":"Dogancan Ozturan","url":"https://picsum.photos/300?image=395"},
  {"name":"Sam X","url":"https://picsum.photos/300?image=396"},
  {"name":"Jonas Lavoie-Levesque","url":"https://picsum.photos/300?image=397"},
  {"name":"Oscar Nilsson","url":"https://picsum.photos/300?image=398"},
  {"name":"Sunset Girl","url":"https://picsum.photos/300?image=399"},
  {"name":"Alejandro Escamilla","url":"https://picsum.photos/300?image=4"},
  {"name":"Ryan Mcguire","url":"https://picsum.photos/300?image=40"},
  {"name":"John French","url":"https://picsum.photos/300?image=400"},
  {"name":"Austin Ban","url":"https://picsum.photos/300?image=401"},
  {"name":"Loudge","url":"https://picsum.photos/300?image=402"},
  {"name":"Sergey Zolkin","url":"https://picsum.photos/300?image=403"},
]

const genImages = async (numberOfImages) => {
  const page = Math.floor(Math.random() * (1000/numberOfImages))
  const picsumUrl = `https://picsum.photos/v2/list?page=${page}&limit=${numberOfImages}`
  try {
    const data = await fetch(picsumUrl);
    const imagesJson = await data.json();
    const images = imagesJson.map(image => {
      const url = `https://picsum.photos/300?image=${image.id}`
      return {
        name: image.author,
        url: url,
      }
    })
    return images
  }
  catch (e) {
    return IMAGE_STUB.slice(0, numberOfImages)
  }
}

export default genImages;