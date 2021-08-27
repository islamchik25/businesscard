/* var canvas = document.querySelectorAll('.canv');
for (let i = 0; i < canvas.length; i++) {
    const canv = canvas[i];
    var ctx = canv.getContext('2d');
var parent = canv.parentElement; */

/* window.addEventListener("resize", ()=>{ */


/* function draw () {

canv.width = parent.clientWidth;
canv.height = parent.clientHeight;

 */


/* ctx.strokeStyle='black';
ctx.linWidth=4;
for(i=0;i<=canvas.width;i=i+60)
{
  ctx.moveTo(i,0);
  ctx.lineTo(i,canvas.width);
  ctx.stroke();
}

for(j=0; j<=canvas.height; j=j+60)
{
    ctx.moveTo(0,j);
    ctx.lineTo(canvas.width,j);
    ctx.stroke();
} */

/* function coordX(x) {
    if (x == 0) {

    } else {
        x = 60 * x;
    }

    return x;
}

function coordY(y) {
    if (y == 0) {

    } else {
        y = 60 * y;
    }
    return y;
}
 */





/* let k = 0;
let n = 8;
let l = 8;
let p = Math.PI;
let o = Math.PI; */

// incrementally draw additional line segments along the path


/* 

    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.bezierCurveTo(480, 200, 100, -290, 60, 170);
    ctx.bezierCurveTo(60, 170, 20, 560, 300, 500);
    ctx.bezierCurveTo(300, 500, 400, 480, 450, 350);
    ctx.bezierCurveTo(450, 350, 490, 250, 450, 200);
    ctx.bezierCurveTo(420, 180, 290, 190, 380, 500);
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 2;
    ctx.stroke();
} 

draw();

} */

/* window.addEventListener("resize", draw()); */

class Menu {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.element = document.querySelectorAll(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }

        this.blocks = document.querySelectorAll("section");
        this.logo = document.querySelector(".logo");
        this.catologBlocks = document.querySelectorAll(".project");
        this.progressbar = document.querySelectorAll('.html');
        this.menumobile = document.querySelector('.menu__nav ');

        for (let i = 0; i < this.blocks.length; i++) {
            const elBlock = this.blocks[i];


            this.logo.addEventListener("click", () => {
                if (elBlock.className == "home-page") {
                    elBlock.style.display = "flex";
                } else {
                        elBlock.style.display = "none";
                }
            })

            if (elBlock.className == "home-page") {
                elBlock.style.display = "flex";
            } else {
                    elBlock.style.display = "none";
                    elBlock.style.position = "absolute";
                    elBlock.style.left = "-100%";
            }
        }

        for (let i = 0; i < this.element.length; i++) {
            const element = this.element[i];

            element.addEventListener("click", () => {
                this.menumobile.style.left = "-100%";
                for (let i = 0; i < this.catologBlocks.length; i++) {
                    const catBlock = this.catologBlocks[i];
                    
                    catBlock.style.cssText = `
                        display: block;
                    `;

                    setTimeout(() => {
                        catBlock.style.opacity = "1";
                    }, i*500);
                    
                }

                for (let i = 0; i < this.blocks.length; i++) {
                    const elBlocks = this.blocks[i];

                    if (element.innerHTML == elBlocks.className) {
                        elBlocks.style.display = "flex";
                        elBlocks.style.position = "relative";
                        let left = -100;
                        requestAnimationFrame(function sectAnim() {
                            if (-1 >= left) {
                                left += 1;
                                elBlocks.style.left = left + "%";
                                requestAnimationFrame(sectAnim)};
                          })

                    } else {
                            elBlocks.style.display = "none";
                            elBlocks.style.left = "-100%";
                    }
                }
            })
        }

    }

}

const optionMenu = new Menu({
    el: '.menu__item',
})

class mobileMenu {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.element = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }
        
        this.open = document.querySelector(obj.open);
        this.close = document.querySelector(obj.close);
        console.log(this.close);
        this.open.addEventListener("click", ()=>{
            this.element.style.display = "flex";
            setTimeout(() => {
                this.element.style.left = "0";
            }, 500);
        })

        this.close.addEventListener("click", ()=>{
            this.element.style.left = "-100%";
            setTimeout(() => {
                this.element.style.display = "none";
            }, 500);
        })
    }
}

const mobileoptions = new mobileMenu({
    el: '.menu__nav',
    close: '.mobile-close',
    open: '.mobile-open',
})

class Homebtn {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.element = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }
        this.child = this.element.childNodes[1];
        this.section = document.querySelectorAll('section');

       /*  this.child.style.cssText = `
                    opacity: 0;
                    margin-left: 0;
            `; */



        this.element.addEventListener("click", ()=>{
            for (let i = 0; i < this.section.length; i++) {
                const elBlocks = this.section[i];

                if (elBlocks.className == "About") {
                    elBlocks.style.display = "flex";
                } else {
                    if (elBlocks.className != "container__menu") {
                        elBlocks.style.display = "none";
                    }
                }
            }
        })
    }
}

const optionHomebtn = new Homebtn({
    el: '.home_btn',
})

class filterContent {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.element = document.querySelectorAll(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }

        this.project = document.querySelectorAll('.project');
        
        for (let i = 0; i < this.element.length; i++) {
            const element = this.element[i];
            
            element.addEventListener("click", ()=>{
                let elFilter = element.getAttribute("data-filter");
                for (let i = 0; i < this.project.length; i++) {
                    const project = this.project[i];
                    
                    let dataFilter = project.getAttribute("data-filter");
                    if (elFilter == dataFilter) {
                        setTimeout(() => {
                            project.style.display = "block";
                            setTimeout(() => {
                                project.style.opacity = "1";
                            }, 500);
                        }, 1000);
                    } else {
                        project.style.opacity = "0";
                        setTimeout(() => {
                            project.style.display = "none";
                        }, 1000);
                    }

                }
            })
        }
    }
}

const optionfilter = new filterContent({
    el: '.catalog__item',
})


class projectHover {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.element = document.querySelectorAll(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }

        for (let i = 0; i < this.element.length; i++) {
            const element = this.element[i];
            let elchildren = element.querySelector('.project-hover');

            element.onmouseover = ()=>{
                elchildren.style.display = "flex";
            }

            element.onmouseout = ()=>{
                elchildren.style.display = "none";
            }
        }
    }
}

const optionProject = new projectHover ({
    el: '.projerct-img',
})

