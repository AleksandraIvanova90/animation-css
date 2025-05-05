import CollapseWidget from "../components/Collapse/collapse";
import CallbackChat from "../components/CallbackChat/callbackChat";

const tasks = document.querySelector(".tasks");

const collapse = new CollapseWidget(tasks);
collapse.bindToDOM();

const chat = new CallbackChat(tasks);
chat.bindToDOM();
