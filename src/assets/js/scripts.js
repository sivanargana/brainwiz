 
let sidebarElement = document.querySelector("[data-layout='sidebar']");
let sidebarToggle = document.querySelectorAll("[data-layout='toggle']"); 
if (sidebarElement) {
  isSidebarOpen = true;
  const setSidebar = () => {
    if (!isSidebarOpen) {
      isSidebarOpen = true;
      sidebarElement.classList.add("open");
      sidebarToggle.forEach((item) => {
        item.querySelector("i").classList.add("fa-close");
        item.querySelector("i").classList.remove("fa-bars");
      });
    } else {
      isSidebarOpen = false;
      sidebarElement.classList.remove("open");
      sidebarToggle.forEach((item) => {
        item.querySelector("i").classList.remove("fa-close");
        item.querySelector("i").classList.add("fa-bars");
      });
    }
  };
  setSidebar();
  sidebarToggle.forEach((item) => {
    item.addEventListener("click", () => {
      setSidebar();
    });
  });
  let links = sidebarElement.querySelectorAll("a");
  let activatedRoute = window.location.pathname;
  links.forEach((item) => {
    if (item.href) {
      if (item.href.indexOf(activatedRoute) !== -1) {
        item.parentElement.classList.add("active");
        if (item.closest("ul").classList.contains("collapse")) {
          item.closest("ul").classList.add("show");
          item.closest("ul").previousElementSibling.classList.remove("collapsed");
        } else {
          item.closest("ul").classList.remove("show");
          if (item.closest("ul").previousElementSibling) {
            item.closest("ul").previousElementSibling.classList.add("collapsed");
          }
        }
      } else {
        item.parentElement.classList.remove("active");
      }
    }
  });
}
function logout(e) {
  Swal.fire({
    html: `<div class="tw-font-bold">Are you sure you want to logout?</div>`,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "var(--primary)",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Toastify({text: "Logged Out Successfully!"}).showToast()
      setTimeout(() => {
        window.location = "login.html";
      }, 1000);
    }
  });
}


document.querySelectorAll("svg.bw-progress").forEach((item) => {
  const svg = d3.select(item);
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  const radius = Math.min(width, height) / 2;
  const percentage = svg.attr("data-value") ? parseFloat(svg.attr("data-value")) : 0.5;

  svg.attr("fill", "currentColor");

  const group = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);

  const background = group
    .append("circle")
    .attr("r", radius - 10)
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-opacity", 0.3)
    .attr("stroke-width", 10);

  const arc = d3
    .arc()
    .innerRadius(radius - 15)
    .outerRadius(radius - 5)
    .startAngle(0);

  const foreground = group
    .append("path")
    .datum({ endAngle: 2 * Math.PI * percentage })
    .attr("fill", "currentColor")
    .attr("d", arc);

  // Optional: Add percentage text
  group
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("font-size", "20px")
    .attr("fill", "currentColor")
    .text(`${percentage * 100}%`);
});

let header = document.querySelector("header");
let gototop = document.querySelector(".gototop-bw");
let whatsapp = document.querySelector(".whatsapp");
if (header) {
  getHeader();
  window.onscroll = function (e) {
    getHeader();
  };

  function getHeader() {
    if (window.scrollY >= 70) {
      header.classList.add("active");
      gototop.classList.add("active");
      whatsapp.classList.add("active");
    } else {
      header.classList.remove("active");
      gototop.classList.remove("active");
      whatsapp.classList.remove("active");
    }
  }
}

if(gototop){
  gototop.addEventListener("click",function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
}






new Swiper(".swiper-gallery", {
  loop:true,
  slidesPerView:"auto",
  spaceBetween: 3,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed:5000,
  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: false,
  on: {
    setTransition(swiper, transition) {
      swiper.wrapperEl.style.transitionTimingFunction = 'linear';
    }
  }
  
});
new Swiper(".swiper-stories", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  pagination: {
    el: ".swiper-stories .swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 3, 
    }
  }
});
let thumbSwiper = new Swiper(".swiper-videos", {
 
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2, 
      },
      768: {
        slidesPerView: 3, 
      },
      1024: {
        slidesPerView: 4, 
      }
    },
    pagination: {
        el: ".swiper-videos .swiper-pagination",
      },
  });
  
 
function send(){
  Swal.fire({ 

    html:"Thank you for your interest in <b>BRAINWIZ</b>. <br/>Our Team will contact your soon",
    icon: "success",
    confirmButtonColor: "var(--primary)",
 
  });
}
 
