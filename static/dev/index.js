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

        /* on calcule la taille de l'image et les marges en fonction de la page */

        // page in px 
        const pageH = 510
        const pageW = 295

        // find its height
        const imH = img.naturalHeight

        // find its width
        const imW = img.naturalWidth
        
        const imageHeightPage = (imH / 100) * 6
        const imageWidthPage = (imW / 100) * 6

        const ratio = Math.floor(imH / imW)

        const marginH = (pageH - imageHeightPage) / 2
        const marginW = (pageW - imageWidthPage) / 2

        if (ratio === 0) {
          image.parentNode.style.height = pageH + 'px'
          image.parentNode.style.width = pageW + 'px'
          image.style.width = '95%'
        }
        
        
        if (ratio === 1) {
          image.parentNode.style.height = pageH + 'px'
          image.parentNode.style.width = pageW + 'px'
          image.style.width = '95%'
        }
        
        
        if (ratio === 2) {
          image.style.marginLeft = marginW + 'px'
          image.style.marginRight = marginW + 'px'
          image.parentNode.style.height = pageH + 'px'
          image.parentNode.style.width = pageW + 'px'
          image.style.height = '95%'
        }

        if (ratio === 3) {
          image.style.marginLeft = marginW + 'px' 
          image.style.marginRight = marginW + 'px' 
          image.parentNode.style.height = pageH + 'px'
          image.parentNode.style.width = pageW + 'px'
          image.style.height = '95%'
        }
        
        console.log(img, ratio, imageHeightPage, imageWidthPage, marginW, marginH)

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
