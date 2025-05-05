export default class CollapseWidget {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.getContent = this.getContent.bind(this);
  }

  bindToDOM() {
    this.parentElement.insertAdjacentHTML(
      "afterbegin",
      `<div class="task1">
                <h4 class="task1-title">Collapse</h4>
                <div class="task1-button">Collapse</div>
                <div class="task1-content">
                    <p class='text plug'>Anim pariatur cliche reprehenderit, enim eiusmod
                    high life accusamus terry rechardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
            </div>`,
    );
    this.element = this.parentElement.querySelector(".task1");
    this.element.addEventListener("click", this.getContent);
  }

  getContent(e) {
    e.preventDefault();
    if (!e.target.classList.contains("task1-button")) return;
    const content = this.element.children[2];
    content.classList.toggle("open");
    const text = content.children[0];
    if (text.classList.contains("plug") == "false") {
      text.classList.add("plug");
    } else {
      text.classList.remove("plug");
    }
  }
}
