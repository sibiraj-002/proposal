window.addEventListener('load', () => {
  textAnim()
  smallHeartAnim()
  sparklesAnim()
  floatingHeartsAnim()
  starSparklesAnim()
  heartBurstAnim()
  starFieldAnim()
});

// Insert smallHearts element
const total = 13
const container = document.querySelector('.smallHearts')
for (var i = 0, span; i < total; i++) {
  span = document.createElement('span')
  span.className = 'smallHeart'
  container.appendChild(span)
}

// Insert sparkles element
const sparkleTotal = 20
const sparkleContainer = document.querySelector('.sparkles')
for (var i = 0, span; i < sparkleTotal; i++) {
  span = document.createElement('span')
  span.className = 'sparkle'
  sparkleContainer.appendChild(span)
}

// Insert star sparkles element
const starSparkleTotal = 15
const starSparkleContainer = document.querySelector('.starSparkles')
for (var i = 0, span; i < starSparkleTotal; i++) {
  span = document.createElement('span')
  span.className = 'starSparkle'
  starSparkleContainer.appendChild(span)
}

// Insert heart burst element
const heartBurstTotal = 12
const heartBurstContainer = document.querySelector('.heartBurst')
for (var i = 0, span; i < heartBurstTotal; i++) {
  span = document.createElement('span')
  span.className = 'burstHeart'
  span.innerHTML = '♥'
  heartBurstContainer.appendChild(span)
}

// Insert star field element
const starFieldTotal = 50
const starFieldContainer = document.querySelector('.starField')
for (var i = 0, span; i < starFieldTotal; i++) {
  span = document.createElement('span')
  span.className = 'star'
  starFieldContainer.appendChild(span)
}

// Text animation
function textAnim() {
  const tl = gsap.timeline()
  tl.set('.s', {
    opacity: 1,
  })
    .from('.s', {
      duration: 0.6,
      delay: '3',
      ease: 'back.out(1.7)',
      scale: 0,
      y: 40,
      rotation: 'random(-10, 10)',
      stagger: 0.06,
    })
}

// Small hearts animation
function smallHeartAnim() {
  const tl = gsap.timeline()
  tl.set('.smallHeart', {
    opacity: 1,
  })
    .fromTo(
      '.smallHeart',
      {
        scale: 0,
        rotate: '-=25',
        y: '+=70',
      },
      {
        duration: 3.4,
        delay: '3.6',
        ease: 'slow.out',
        rotate: 'random(-20, 20)',
        scale: 'random(0.5, 1.5)',
        y: '0',
        x: Math.PI * 4,
        modifiers: {
          x: function (x) {
            return Math.sin(parseFloat(x)) * 15 + 'px'
          },
        },
        stagger: {
          each: 0.08,
          from: 'random',
        },
      }
    )
}

// Sparkles animation
function sparklesAnim() {
  const tl = gsap.timeline()
  tl.set('.sparkle', {
    opacity: 1,
  })
    .fromTo('.sparkle',
      {
        scale: 0,
        rotation: 0,
      },
      {
        duration: 1.5,
        delay: '4',
        ease: 'power2.out',
        scale: 'random(0.5, 1.5)',
        rotation: 'random(0, 360)',
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        stagger: {
          each: 0.1,
          from: 'random',
        },
        repeat: -1,
        yoyo: true,
        repeatDelay: 'random(1, 3)',
      }
    )
}

// Floating hearts animation
function floatingHeartsAnim() {
  // Create additional floating hearts
  const floatingContainer = document.querySelector('.drawBox')
  const colors = ['#ff6b9d', '#ff8fab', '#ffb3ba', '#ffc0cb', '#ffd1dc']

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div')
    heart.className = 'floatingHeart'
    heart.innerHTML = '♥'
    heart.style.position = 'absolute'
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px'
    heart.style.color = colors[Math.floor(Math.random() * colors.length)]
    heart.style.opacity = '0'
    heart.style.left = Math.random() * 100 + '%'
    heart.style.top = Math.random() * 100 + '%'
    heart.style.pointerEvents = 'none'
    heart.style.zIndex = '1'
    floatingContainer.appendChild(heart)
  }

  const tl = gsap.timeline()
  tl.set('.floatingHeart', {
    opacity: 1,
  })
    .fromTo('.floatingHeart',
      {
        scale: 0,
        y: '+=100',
        rotation: 'random(-30, 30)',
      },
      {
        duration: 'random(3, 6)',
        delay: 'random(5, 8)',
        ease: 'power1.out',
        scale: 'random(0.8, 1.2)',
        y: '-=150',
        rotation: 'random(-180, 180)',
        x: 'random(-30, 30)',
        stagger: {
          each: 0.5,
          from: 'random',
        },
        repeat: -1,
        repeatDelay: 'random(2, 5)',
      }
    )
}

// Star sparkles animation
function starSparklesAnim() {
  const tl = gsap.timeline()
  tl.set('.starSparkle', {
    opacity: 1,
  })
    .fromTo('.starSparkle',
      {
        scale: 0,
        rotation: 0,
      },
      {
        duration: 2,
        delay: '5',
        ease: 'power2.out',
        scale: 'random(0.8, 1.5)',
        rotation: 'random(0, 360)',
        x: 'random(-80, 80)',
        y: 'random(-80, 80)',
        stagger: {
          each: 0.15,
          from: 'random',
        },
        repeat: -1,
        yoyo: true,
        repeatDelay: 'random(2, 4)',
      }
    )
}

// Heart burst animation
function heartBurstAnim() {
  const tl = gsap.timeline()
  tl.set('.burstHeart', {
    opacity: 1,
  })
    .fromTo('.burstHeart',
      {
        scale: 0,
        x: 0,
        y: 0,
        rotation: 0,
      },
      {
        duration: 2,
        delay: '6',
        ease: 'power2.out',
        scale: 'random(0.5, 1.2)',
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        rotation: 'random(-180, 180)',
        stagger: {
          each: 0.1,
          from: 'center',
        },
        repeat: -1,
        repeatDelay: 'random(3, 6)',
      }
    )
}

// Star field animation
function starFieldAnim() {
  // Position stars randomly
  const stars = document.querySelectorAll('.star')
  stars.forEach(star => {
    star.style.left = Math.random() * 100 + '%'
    star.style.top = Math.random() * 100 + '%'
  })

  const tl = gsap.timeline()
  tl.set('.star', {
    opacity: 0.6,
  })
    .to('.star', {
      duration: 'random(2, 4)',
      delay: '1',
      ease: 'power1.inOut',
      opacity: 'random(0.3, 0.9)',
      scale: 'random(0.5, 1.5)',
      stagger: {
        each: 0.05,
        from: 'random',
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 'random(1, 3)',
    })
}