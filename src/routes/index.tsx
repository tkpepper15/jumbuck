import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

// TYPES

interface Term {
  id: number;
  name: string;
  description: string;
}

interface StoreData {
  idCounter: number;
  terms: Term[];
}

// PAGE

export const head: DocumentHead = () => {
  return {
    title: "Jumbuck",
    meta: [
      {
        name: "description",
        content:
          "Jumbuck serves is a sleek notepad with capablities unlike any other.",
      },
    ],
  };
};

export default component$(() => {
  const store = useStore<StoreData>(
    {
      terms: [],
      idCounter: 0,
    },
    { recursive: true }
  );

  useTask$(async () => {
    // Make call to load data from the database here.
    store.terms = terms;
    store.idCounter = terms.length;
  });

  return (
    <div id="content">
      <h1>Hello.</h1>
      <p>
        Jumbuck serves as a sleek notepad with capablities unlike any other.
        Namely, its intutive implementation of <code>terms</code> and their
        respective definitions—enabling one to easily access key information at
        a glance.
      </p>
      <fieldset>
        <button
          onClick$={() => {
            store.terms = [makeDefaultTerm(store.idCounter), ...store.terms];
            store.idCounter = store.idCounter + 1;
          }}
        >
          add
        </button>
        <button
          onClick$={() => {
            // Do database call here.
            console.log(JSON.stringify(store));
          }}
        >
          save
        </button>
      </fieldset>
      <ul class="terms-list">
        {store.terms.map((term, index) => (
          <li id={`${term.id}`}>
            <button
              class="remove-button"
              aria-label="Remove this term"
              onClick$={() => {
                store.terms = store.terms.filter(({ id }) => id !== term.id);
              }}
            >
              x
            </button>
            <div class="term-container">
              <label class="term">
                <span class="sr-only">Name</span>
                <input
                  type="text"
                  value={term.name}
                  onInput$={(ev) => {
                    const term = store.terms[index];
                    store.terms[index] = {
                      ...term,
                      name: (ev.target as HTMLInputElement).value,
                    };
                  }}
                />
              </label>
              <label class="description">
                <span class="sr-only">Description</span>
                <textarea
                  name=""
                  id=""
                  value={term.description}
                  onInput$={(ev) => {
                    const term = store.terms[index];
                    store.terms[index] = {
                      ...term,
                      description: (ev.target as HTMLInputElement).value,
                    };
                  }}
                />
              </label>
            </div>
          </li>
        ))}
      </ul>
      <pre class="json-display">
        <code>{JSON.stringify(store, null, 2)}</code>
      </pre>
    </div>
  );
});

// UTILS

export const makeDefaultTerm = (id: number): Term => {
  return {
    id,
    name: "New Term",
    description: "Add your description here.",
  };
};

// EXAMPLE DATA. DELETE LATER

export const terms: Term[] = [
  {
    id: 0,
    name: "dog",
    description:
      "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter-gatherers over 15,000 years ago, before the development of agriculture.",
  },
  {
    id: 1,
    name: "tree",
    description:
      "a woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
  },
  {
    id: 2,
    name: "CPU",
    description:
      "A central processing unit, also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output operations specified by the instructions in the program.",
  },
  {
    id: 3,
    name: "Yellowstone National Park",
    description:
      "Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.",
  },
];
