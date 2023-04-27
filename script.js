window.onload = function () {
  const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  function generateRandomHex() {
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexArray.length);
      hexNumber += hexArray[randomIndex];
    }
    return hexNumber;
  }

  const blocks = document.querySelectorAll('.main__block');

  const updateBlockColor = (blocks) => {
    blocks.forEach((block) => {
      if (!block.hasAttribute('data-attribute')) {
        const color = generateRandomHex().toLocaleLowerCase();
        block.style.backgroundColor = color;
        const textBlocks = block.querySelector('.main__text');
        textBlocks.textContent = color;
      }
    });
  };

  blocks.forEach((block) => {
    const imgElement = block.querySelector('.main__img');

    imgElement.addEventListener('click', function (e) {
      const svgElements = imgElement.querySelectorAll('svg');
      svgElements.forEach((svgElement) => {
        svgElement.classList.toggle('display-none');
      });
      if (block.hasAttribute('data-attribute')) {
        block.removeAttribute('data-attribute');
      } else {
        block.setAttribute('data-attribute', 'lock');
      }
    });
  });

  updateBlockColor(blocks);

  window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
      updateBlockColor(blocks);
    }
  });
};
