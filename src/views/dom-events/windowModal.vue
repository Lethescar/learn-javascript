<template>
  <div class="text-white">
    <div class="modal-window p-4 calc-height overflow-y-auto">
      <div class="bg-color box-border block h-full">
        <button class="show-modal">Show modal 1</button>
        <button class="show-modal">Show modal 2</button>
        <button class="show-modal">Show modal 3</button>

        <div class="modal hidden">
          <button class="close-modal">&times;</button>
          <h1 class="text-xl font-semibold">I'm a modal window 😍</h1>
          <div class="text-black">
            <p>Life consists not in holding good cards but in playing those you hold well.人生不在于抓到一副好牌，而在于打好你手里的牌。</p>
            <p>Success is the sum of small efforts, repeated day in and day out.成功就是日复一日那一点点小小努力的积累。</p>
            <p>If you can do what you do best and be happy, you're further along in life than most
              people.只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。</p>
            <p>Time waits for no one. Treasure every moment you have.时间不等人，珍惜你所拥有的每分每秒吧！</p>
            <p>We'll have a fresh start for the year ahead.一元复始，万象更新。</p>
            <p>The devil is always in the details.细节决定成败。</p>
            <p>A glamorous life is quite different to a life of luxury.人生的精彩，与奢华无关。</p>
          </div>
        </div>
        <div class="overlay hidden"></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { nextTick } from 'vue';

let modal: Element;
let overlay: Element;
let closeModalBtn: Element;
let showModalBtn: NodeListOf<Element>;

nextTick(() => {
  modal = document.querySelector('.modal') as Element;
  overlay = document.querySelector('.overlay') as Element;
  closeModalBtn = document.querySelector('.close-modal') as Element;
  showModalBtn = document.querySelectorAll('.show-modal') as NodeListOf<Element>;
  handler()
  handleKeydown()
})

/**
 * 显示modal
 */
function showModal() {
  modal?.classList.remove('hidden')
  overlay?.classList.remove('hidden')
}

/**
 * 关闭modal
 */
function closeModal() {
  modal?.classList.add('hidden')
  overlay?.classList.add('hidden')
}

function handler() {
  for (let index = 0; index < showModalBtn.length; index++)
    showModalBtn[index].addEventListener('click', showModal)

  closeModalBtn?.addEventListener('click', closeModal)
}

function handleKeydown() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modal?.classList.contains('hidden')) {
        closeModal()
      }
    }
  })
}

</script>

<style lang='less' scoped>
.calc-height {
  height: calc(100vh - 120px);
}

.modal-window {
  font-family: sans-serif;
}

.bg-color {
  background: linear-gradient(to top left, #28b487, #7dd56f);
}

.show-modal {
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  margin: 2.5rem 1rem;
  border: none;
  background-color: #fff;
  color: #444;
  border-radius: 5rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

/* -------------------------- */
/* CLASSES TO MAKE MODAL WORK */
.hidden {
  display: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}
</style>