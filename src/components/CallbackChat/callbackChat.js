export default class CallbackChat {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  bindToDOM() {
    this.parentElement.insertAdjacentHTML(
      "afterbegin",
      ` <div class="task2">
                    <h4 class="task2-title">Callback Chat</h4>
                    <div class="task2-button"></div>
             </div>`,
    );
    this.element = this.parentElement.querySelector(".task2");
    this.element.addEventListener("click", this.openChat);
    this.element.addEventListener("click", this.closeChat);
  }

  openChat(e) {
    e.preventDefault();
    if (!e.target.classList.contains("task2-button")) return;
    e.target.classList.add("plug");
    this.addForm();
  }

  addForm() {
    this.element.insertAdjacentHTML(
      "beforeend",
      ` <form class="form">
                    <div class="form-close">&#10060;</div>
                    <h3 class="form-title">Напишите нам</h3>
                    <textarea class="form-content"></textarea>
                    <div class="form-button">Отправить</div>
             </form>`,
    );
  }

  closeChat(e) {
    e.preventDefault();
    if (!e.target.classList.contains("form-close")) return;
    const form = e.target.closest(".form");
    form.remove();
    this.element.children[1].classList.remove("plug");
  }
}
