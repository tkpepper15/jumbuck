import { component$ , useStore } from '@builder.io/qwik';

interface Term {
  id: number,
  name: string,
  description: string
}

interface StoreData {
  terms: Term[]
}

export default component$(() => {

  const store = useStore<StoreData>({
    terms: []
  }, { recursive: true });

  return (
<div id="content" >
<h1>
        Hello.
      </h1>
      <td>Jumbuck serves as a sleek notepad with capablities unlike any other. Namely, its intutive implementation of <code>terms</code> and their respective definitions—enabling one to easily access key information at a glance.</td>
      <ul>
      </ul>
<table class="commands" style="margin-bottom: 0; overflow-x: visible;">
  <tr>
    <td>
    <center>  <flashcard contentEditable="true">dog</flashcard> </center>
    </td>
    <td contentEditable="true">The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter-gatherers over 15,000 years ago, before the development of agriculture.</td>
  </tr>
  <tr>
    <td>
    <center>  <flashcard contentEditable="true">tree</flashcard> </center>
    </td>
    <td contentEditable="true">a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.</td>
  </tr>
  <tr>
    <td>
    <center>  <flashcard contentEditable="true">CPU</flashcard> </center>
    </td>
    <td contentEditable="true">A central processing unit, also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output operations specified by the instructions in the program.</td>
  </tr>
  <tr>
    <td>
    <center>  <flashcard contentEditable="true">Yellowstone National Park</flashcard> </center>
    </td>
    <td contentEditable="true">Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.</td>
  </tr>
</table>
<>
      <td><p><button>add</button> <button>save</button></p></td>

    </>
</div>

  );
  });
