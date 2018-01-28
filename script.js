function Slider() {
  this.element = { 
    left: document.querySelector('#left'),
    right: document.querySelector('#right'),
    carousel: document.querySelector('#slide'),
    carouselList: document.querySelectorAll('#slide li'),
    containerWidth: document.querySelector('#container').offsetWidth,
    settings: {
      transf: "T",
      margin: "M",
      factor: 1,
      factorRight: 1,
      value: 0
            }
        };
      this.insertWidth();
      //choose the method
      //this.bindEvents();
      this.transformEvents();
};
Slider.prototype = {
            insertWidth: function () {
              
              var slideWidth = this.element.containerWidth;
              var width = this.element.carousel;
              var totalSlides = this.element.carouselList.length;
              
              //tested in chrome
              window.addEventListener('load', function (item) {
                        width.style.width = slideWidth * totalSlides;
                    });
            },
            /*bindEvents: function () { 
              var move = this.element.containerWidth;
              var value = 0;
              console.log(move);
              
    
              var self = this;
                this.element.left.addEventListener('click', function (item) {
                  if ( value == 0 ) {
                    value = 2;
                    self.element.carousel.style.marginLeft = value * (-move);
                    value ++;
                  } else if ( value == 3) {
                    value = 1;
                    self.element.carousel.style.marginLeft = value * (-move);
                  } else {
                    value = 0;
                    self.element.carousel.style.marginLeft = value * (move);
    
                  }
                });
    
                this.element.right.addEventListener('click', function(item) {
                  if (value == 3) {
                    value = 0;
                    self.element.carousel.style.marginLeft = value * (-move);
                  } else if ( value == 0) { 
                    value = 1;
                    self.element.carousel.style.marginLeft = value * (-move);
                    value ++;
                  } else {
                    self.element.carousel.style.marginLeft = value * (-move);
                    value ++;
                  }
                });                            
            
              },*/
            transformEvents: function () {
              var move = this.element.containerWidth;
              var theCarousel = this.element.carouselList.length;
              var calculateMove = Number(move*theCarousel);
              
                  this.element.left.moveLeft(this.element.settings.transf,theCarousel, calculateMove) ;        

                  this.element.right.addEventListener('click', function(item) {
                    if (value == theCarousel-1 ) {
                      self.element.carousel.style.transform = "translate(0px,0)";
                      factorRight=1;
                      value =0;
                    } else {
                      value ++;
                      self.element.carousel.style.transform = "translate(-"+move*factorRight +"px,0)";
                      factor++;
                      factorRight++;
                    }
                  }); 
                }
            
        };

function moveLeft(movetype, l, calmove) {
  this.movetype = movetype;
  this.l=l;
  this.calmove = calmove;s
  if (movetype=="T") {
    var self = this;
    this.element.addEventListener('click', function (movetype,l, calmove) {
      var settings = self.element.settings;
      var carouselStyle = self.element.carousel.style;
      if (self.element.settings.value == 0 ) {
          settings.value = l-1;
          settings.factor = 1;
            
            carouselStyle.transform = "translate(-"+ calmove +"px,0)";
      } else if ( self.element.settings.value == l-1 ) {
          settings.factor=2;
            carouselStyle.transform = "translate(-"+ calmove+"px,0)";
          settings.value --;
      } else {
          settings.factor ++; 
          settings.value --;
            carouselStyle.transform = "translate(-"+ calmove+"px,0)";               
      };                                     
    });
  }
}

new Slider();


       