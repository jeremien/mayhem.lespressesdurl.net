gs -sDEVICE=pdfwrite -dBATCH -dCompatibilityLevel=1.4 -sProcessColorModel=DeviceGray -sColorConversionStrategy=Gray -dPDFSETTINGS=/screen -dQUIET -dNOPAUSE -sOutputFile=book201221bd.pdf book201221.pdf

gs -sDEVICE=pdfwrite -dBATCH -dCompatibilityLevel=1.3 -sProcessColorModel=DeviceGray -sColorConversionStrategy=Gray -dPDFSETTINGS=/prepress -dQUIET -dNOPAUSE -sOutputFile=document.pdf Document.pdf


pagedjs-cli http://localhost:5000/ -o document.pdf
