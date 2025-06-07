import { LinkedList } from "./list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("My Insertion", 3);
list.removeAt(3);
console.log(list.toString());
