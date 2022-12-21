let blocks = [...document.querySelectorAll('.block')]
let count = 0;
let counted = [];

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', () => {
        blocks[i].style.background = 'black';
        counted.push(blocks[i]);
        console.log(counted);
        if (counted.length === blocks.length) {
            let temp = counted;
            counted = [];
            for (let i = 0; i < temp.length; i++) {
                setTimeout(() => {
                    temp[i].style.background = 'white';
                }, 2500 * i)
            }
        }
    })
}