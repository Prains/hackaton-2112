let blocks = [...document.querySelectorAll('.block')]
let count = 0;
let counted = [];

for (let i = 0; i < blocks.length; i++) {
    handleClick(blocks[i]);
}

function handleClick(block) {
    block.addEventListener('click', () => {
        block.style.background = 'black';
        counted.push(block);
        console.log(counted);
        if (counted.length === blocks.length) {
            setTimeout(() => {
                for (let i = 0; i < blocks.length; i++) {
                    handleClick(blocks[i]);
                }
            }, 5000)
            let temp = counted;
            counted = [];
            for (let i = 0; i < temp.length; i++) {
                setTimeout(() => {
                    temp[i].style.background = 'white';
                }, 1250 * i / 2)
            }
        }
    }, { once: 'true' })
}