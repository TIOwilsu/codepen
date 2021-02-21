function ready(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState === "complete") {
        callbackFunc();
      }
    });
  }
}

ready(function () {
  class Element {
    constructor(tag, attrs) {
      this.tag = tag;
      this.attrs = attrs;
    }
    get $el() {
      return this.#create();
    }
    #create() {
      const $el = document.createElement(this.tag);
      for (const [key, value] of Object.entries(this.attrs)) {
        $el[key] = value;
      }
      return $el;
    }
  }
  class Component {
    constructor($parent, items, dom) {
      this.items = items;
      this.dom = dom;
      this.$parent = $parent;
    }
    get $el() {
      return this.#create();
    }
    #create() {}
  }

  const musics = [
    {
      album: "Drug for the Modern Age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
    {
      album: "Drug for the Modern age",
      audio: "kopecky_real-life.mp3",
      title: "Real Life",
      band: "Kopecky",
      duration: "3:31",
      img: "album.jpg",
      year: "2015",
    },
  ];

  const musicsDOM = [
    {
      parent: "music",
      tag: "div",
      props: {
        className: "img mr-4",
      },
    },
    {
      parent: "img",
      tag: "img",
      props: {
        alt: "img",
      },
    },
    {
      parent: "music",
      tag: "div",
      props: {
        className: "about flex-column",
      },
    },
    {
      parent: "about",
      tag: "div",
      props: {
        className: "texts flex-column",
      },
    },
    {
      parent: "texts",
      tag: "h5",
      type: "title",
      props: {
        className: "title ellipsis",
      },
    },
    {
      parent: "texts",
      tag: "div",
      props: { className: "info flex-column" },
    },
    {
      parent: "info",
      tag: "p",
      type: "band",
      props: {
        className: "band text ellipsis mr-md-0 mr-1 ml-md-4 ml-0",
      },
    },
    {
      parent: "info",
      tag: "div",
      props: {
        className: "icon-dot text d-block d-md-none",
      },
    },
    {
      parent: "info",
      tag: "p",
      type: "album",
      props: {
        className: "album text ellipsis ml-md-4 ml-1 ml-md-4 ml-0",
      },
    },
    {
      parent: "about",
      tag: "p",
      type: "duration",
      props: {
        className: "duration ellipsis text-right text ml-4",
      },
    },
  ];
  const svgDOM = [
    {
      tag: "svg",
      props: {
        viewBox: "0 0 24 24",
        preserveAspectRatio: "xMidYMid meet",
        focusable: "false",
        className: "style-scope icon-iron",
      },
    },
    { tag: "g", props: { className: "style-scope icon-iron" } },
    { tag: "path", props: { className: "style-scope icon-iron" } },
  ];

  const icons = {
    back: "M6 6h2v12H6zm3.5 6l8.5 6V6z",
    next: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z",
    play: "M8 5v14l11-7z",
    pause: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
  };
  const position = {
    valueInternal: 0,
    valueListener: function (val) {},
    set value(val) {
      this.valueInternal = val;
      this.valueListener(val);
    },
    get value() {
      return this.valueInternal;
    },
    registerListener: function (listener) {
      this.valueListener = listener;
    },
  };

  let music = musics[position.value];
  let audio = new Audio(music.audio);

  function appendChild($parent, tag, attrs, text) {
    const { $el } = new Element(tag, attrs);
    if (text) $el.innerText = text;
    $parent.appendChild($el);
  }
  function createIcon(d) {}
  function createElement(tag, attrs) {
    const $el = document.createElement(tag);
    for (const [key, attr] of Object.entries(attrs)) {
      $el[key] = attr;
    }
    return $el;
  }
  function getMusics() {
    return document.querySelector(".musics");
  }
  function hasClass($el, className) {
    return $el.className.indexOf(className) > -1;
  }
  function addClass($el, className) {
    $el.classList.add(className);
  }
  function removeClass($el, className) {
    $el.classList.remove(className);
  }
  function selectMusic($el) {
    const classes = "is-active";
    const $lis = Object.values(getMusics().children);
    const $li = $lis.find(($li) => hasClass($li, classes));
    if ($li) removeClass($li, classes);
    addClass($el, classes);
    const id = $el.id.split("-")[1];
    position.value = id;
  }
  function createList() {
    const $ul = getMusics();
    for (const [key, music] of Object.entries(musics)) {
      const props = { id: `music-${key}`, className: "music" };
      appendChild($ul, "li", props);
      const $lis = getMusics().children;
      $lis[key].addEventListener("click", () => selectMusic($lis[key]));
      for (const musicDOM of musicsDOM) {
        musicDOM.props.src = music.img;
        const { parent, tag, type, props } = musicDOM;
        $parent = $lis[key].querySelector(`.${parent}`);
        if (!$parent) $parent = $lis[key];
        appendChild($parent, tag, props, music[type]);
      }
    }
  }
  function createPlayer() {
    const $player = document.querySelector(".player");
    if ($player) {
      const $leftControls = $player.querySelector(".controls-left");
      const $leftButtons = $leftControls.querySelector(".controls-buttons");

      const $buttonBack = $leftButtons.querySelector(".button-back");
      const $buttonPlayPause = $leftButtons.querySelector(".button-play-pause");
      const $buttonNext = $leftButtons.querySelector(".button-next");

      const $about = $player.querySelector(".about");
      const $img = $about.querySelector(".about-img");
      const $text = $about.querySelector(".about-text");
      const $title = $text.querySelector(".about-title");
      const $desc = $text.querySelector(".about-desc");

      $buttonPlayPause.addEventListener("click", () =>
        audio.paused ? audio.play() : audio.pause()
      );

      $buttonBack.addEventListener("click", () => position.value--);

      $buttonNext.addEventListener("click", () => position.value++);

      position.registerListener(function (val) {
        audio.load();
        music = musics[val];
        $img.src = music.img;
        $title.innerText = music.title;
        $desc.innerText = `${music.band}|${music.album}|${music.year}`;
        audio = new Audio(music.audio);
        audio.play();
      });
    }
  }
  function list() {
    const $ul = document.querySelector("ul");
    const list = new Component($ul, musics, musicsDOM);
    console.log(list);
  }
  createPlayer();
  createList();
  list();
});
