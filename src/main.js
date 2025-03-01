import './style.css';
import 'atropos/atropos.min.css';
import Atropos from 'atropos';

document.addEventListener('DOMContentLoaded', () => {
  const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1,
    alwaysActive: true
  });
});

document.querySelector('#app').innerHTML = `
<div class="atropos my-atropos">
  <div class="atropos-scale">
    <div class="atropos-rotate">
      <div class="atropos-inner">
        <img src="./assets/band.avif" alt="image" class="img">
      </div>
    </div>
  </div>
</div>
`;
