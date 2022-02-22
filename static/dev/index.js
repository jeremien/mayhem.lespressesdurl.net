import './main.scss'

class imageRatio extends Paged.Handler {

  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller)
  }

  afterParsed(parsed) {
    // create an array that will store the images data later on
    let imagePromises = [];
    // find all images parsed by paged.js
    let images = parsed.querySelectorAll('img')
    // for each image
    images.forEach(image => {
      // load the image as an object
      let img = new Image ()
      // console.log(img)
      // test if the image is loaded
      let resolve, reject
      let imageLoaded = new Promise( function (r, x) {
        resolve = r
        reject = x
      })
      // when the image loads
      img.onload = function () {
        // page in px 
        const pageH = 500
        const pageW = 300

        // find its height
        const imH = img.height

        // find its width
        const imW = img.width
        
        const imageHeightPage = (imH / 100) * 6

        let ratio = Math.floor(imH / imW)
        
        // TODO: ajouter le ratio
        const marginImage = ((pageH - imageHeightPage) / 2)
        if (marginImage > 0 && ratio === 2) {
          image.style.marginTop = marginImage + 'px'
        } else if (marginImage > 0 && ratio === 0) {
          image.style.marginTop = marginImage + 'px'
        } else {
          image.style.marginTop = null
        }
        
        if (imH > 6000) {
          image.parentNode.parentNode.classList.add('imageA')
        } else if (imH > 2000 && imH < 6000) {
          image.parentNode.parentNode.classList.add('imageB')
        } else {
          image.parentNode.parentNode.classList.add('imageC')
        }
          
        console.log(img, imH, ratio)
      

        // resolve the promise
        resolve()
      }
      // if there is an error, reject the promise
      img.onerror = function () {
        reject()
      }

      img.src = image.src

      imagePromises.push(imageLoaded)
    })

    return Promise.all(imagePromises).catch(err => {
      console.warn(err)
    })
  }
}

// and we register the handler

Paged.registerHandlers(imageRatio)
