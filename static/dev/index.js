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
        const pageH = 600

        // find its height
        const imH = img.height

        // find its width
        const imW = img.width
        console.log('height', imH, 'width', imW)


        if (imH < 600) {
          image.parentNode.parentNode.classList.add('imageA')
          // calculate the marges
          const marginImage = (pageH - imH)/2
          console.log(marginImage)
          if (marginImage > 0) {
            // applique to the image except if its negative
            image.style.marginTop = marginImage + 'px'
          }

        } else if (imH > 1000 ) {
          image.parentNode.parentNode.classList.add('imageC')
        } else {
          image.parentNode.parentNode.classList.add('imageB')

        }

      

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
