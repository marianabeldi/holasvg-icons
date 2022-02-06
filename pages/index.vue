<template>
  <div class="main-wrapper">
    <b class="top"></b>
    <h1><span class="home-link"><a href="https://holasvg.com/">hola svg</a></span>Free Open SVG <span class="highlight">Icons</span></h1>
    <h2>
      Learn how to customize them
      <a rel="noopener" target="_blank" href="https://css-tricks.com/how-to-simplify-svg-code-using-basic-shapes/">here</a>.
    </h2>
    <div class="style-bar">
      <button class="btn-reset" @click="clearLocal">Reset</button>
      <div>
        <label for="inputStrokeRange">Stroke width:</label>
        <input id="inputStrokeRange" type="range" min="1" max="20" v-model="strokeWidthValue" @input="changeWidth" />
      </div>
      <div>
        <label for="inputFillColor">Fill color:</label>
        <input id="inputFillColor" type="color" @input="changeFill" v-model="fillValue" />
      </div>
      <div>
        <label for="inputStrokeColor">Stroke color:</label>
        <input id="inputStrokeColor" type="color" @input="changeStrokeColor" v-model="strokeColorValue" />
      </div>
      <div>
        <label class="checkmark-container" for="inputLinecapRound">Round:
          <input id="inputLinecapRound" type="checkbox" :checked="lineCapRoundC" @change="linecapRound()">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect class="checkmark-bg" x="1" y="1" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1" rx="3" ry="3"/>
            <polyline class="checkmark" points="8,17 14,23 25,8" stroke="transparent" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none"/>
          </svg>
        </label>
      </div>
      <div>
        <label class="checkmark-container" for="inputDashTrue">Stroke dash:
          <input id="inputDashTrue" type="checkbox" @change="showDash()" :checked="isActive">
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <rect class="checkmark-bg" x="1" y="1" width="30" height="30" stroke="currentColor" fill="none" stroke-width="1" rx="3" ry="3"/>
              <polyline class="checkmark" points="8,17 14,23 25,8" stroke="transparent" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none"/>
            </svg>
        </label>
      </div>
      <div class="show-dash-position" :class="{ 'active': isActive }">
        <label for="inputDashoffsetffetRange">Dash position:</label>
        <input id="inputDashoffsetRange" type="range" min="0" max="200" v-model="strokeDashoffsetValue" @input="chanceDashoffset" />
      </div>
    </div>
    <div class="icons-container">
      <div
        tabindex="0"
        class="single-icon"
        v-for="icon of svgIcons"
        :key="icon.slug"
        :class="{'active':icon.title === selectedIcon.title}"
        @click="openCode(icon)"
        :aria-label="icon.title"
      >
        <svg
          :fill="fillColor"
          :stroke="strokeColor"
          :stroke-width="strokeWidth"
          :stroke-dashoffset="strokeDashoffset"
          :stroke-dasharray="strokeDashArray"
          :stroke-linecap="lineCap"
          :stroke-linejoin="lineJoin"
          v-html="icon.editable"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        />
        <form action="https://codepen.io/pen/define" method="POST" target="_blank">
          <input type="hidden" name="data" :value="codepenvalue">
          <button tabindex="0" type="button" class="btn btn-codepen" @click="holacodepen(icon)">
            <svg viewBox="0 0 100 100"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3L84 21.8c-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0L30.4 12.2 5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"/></svg> Create CodePen
          </button>
        </form>
        <button type="button" class="btn btn-copy" @click="holaclipboard(icon)">{{copyText}}</button>
        <p ref="icon-label"><span>{{ icon.title }}</span></p>
      </div>
    </div>

    <a class="share-twitter" rel="noopener" target="_blank"
      href="https://twitter.com/intent/tweet?text=Free,%20simple,%20and%20customizable%20SVG%20icons!%20https%3A//holasvg.com/icons%0A%40marianabeldi">
      <svg viewBox="30 30 410 410"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path></svg> 
      Share <span class="mobile-none"> on Twitter</span>
    </a>
    <a class="btn feedback" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSfy9SBgC7xT9vq3RvD9sRxlG7xIcWc-dfN5f1grxnUR7zK6-w/viewform?usp=sf_link">Do you have feedback? 🐣</a>
    <Footer/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const svgIcons = await $content("svg-icons", params.slug)
      .sortBy("order", "asc")
      .fetch();
    return {
      svgIcons,
    };
  },
  head() {
    return {
      title: 'Hola SVG Icons',
      meta: [
        { name: 'title', content: "Hola SVG Icons" },
        { name: 'description', content: "Free Open SVG Icons" },
        { property: 'og:type', content: "website" },
        { property: 'og:url', content: "https://holasvg.com/icons/" },
        { property: 'og:title', content: "Hola SVG Icons" },
        { property: 'og:description', content: "Free Open SVG Icons" },
        { property: 'og:image', content: "/holasvg-icons.gif" },
        { property: 'twitter:card', content: "summary_large_image" },
        { property: 'twitter:url', content: "https://holasvg.com/icons/" },
        { property: 'twitter:title', content: "Hola SVG Icons" },
        { property: 'twitter:description', content: "Free Open SVG Icons" },
        { property: 'twitter:image', content: "/holasvg-icons.gif" },
      ],
    };
  },
  data() {
    return {
      svgIcons: [],
      selectedIcon: [],
      codepenvalue: {},
      headerText: "Version 1.0 ✨",
      copyText: "Copy",
      strokeWidthValue: 8,
      fillColor: "none",
      strokeWidth: 8,
      strokeColor: "#0E1A27",
      strokeColorValue: "#0E1A27",
      fillValue: "none",
      strokeDashoffset: 0,
      strokeDashoffsetValue: 0,
      isActive: false,
      strokeDashArray: "0",
      lineCap: "round",
      lineCapRoundC: true,
      lineJoin: "round"
    };
  },
  mounted() {
    if(localStorage.getItem('strokeWidth')) {
      this.strokeWidthValue = localStorage.getItem('strokeWidth');
      this.strokeWidth = localStorage.getItem('strokeWidth');
    }
    if(localStorage.getItem('strokeColor')) { 
      this.strokeColorValue = localStorage.getItem('strokeColor');
      this.strokeColor = localStorage.getItem('strokeColor');
    }
    if(localStorage.getItem('fillColor')) { 
      this.fillColor = localStorage.getItem('fillColor');
      this.fillValue = localStorage.getItem('fillColor');
    }
    if(localStorage.getItem('lineCap')) { 
      this.lineCap = localStorage.getItem('lineCap');
    }
    if(localStorage.getItem('lineJoin')) { 
      this.lineJoin = localStorage.getItem('lineJoin');
    }
    if(localStorage.getItem('lineCapRoundC')) { 
      var currentCheck = localStorage.getItem('lineCapRoundC');
      if (currentCheck === 'true') {
        this.lineCapRoundC = true;
      }
      if (currentCheck === 'false') {
        this.lineCapRoundC = false;
      }
    }
    if(localStorage.getItem('isActive')) { 
      var currentCheck = localStorage.getItem('isActive');
      if (currentCheck === 'true') {
        this.isActive = true;
      }
      if (currentCheck === 'false') {
        this.isActive = false;
      }
    }
    if(localStorage.getItem('strokeDashArray')) { 
      this.strokeDashArray = localStorage.getItem('strokeDashArray');
    }
    if(localStorage.getItem('strokeDashoffset')) { 
      this.strokeDashoffset = localStorage.getItem('strokeDashoffset');
      this.strokeDashoffsetValue = localStorage.getItem('strokeDashoffset');
    }
  },
  methods: {
    clearLocal(){
      localStorage.clear();
      this.strokeWidthValue = 8;
      this.strokeWidth = 8;
      this.strokeColorValue = "#0E1A27";
      this.strokeColor = "#0E1A27";
      this.fillColor = "none";
      this.fillValue = "none";
      this.strokeDashoffset = 0;
      this.strokeDashoffsetValue = 0;
      this.lineCap = "round";
      this.lineJoin = "round";
      this.strokeDashArray = "0";
      this.lineCapRoundC = true;
      this.isActive = false;
    },
    changeFill() {
      this.fillColor = this.fillValue;
      localStorage.setItem('fillColor', this.fillColor);
    },
    changeStrokeColor() {
      this.strokeColor = this.strokeColorValue;
      localStorage.setItem('strokeColor', this.strokeColor);
    },
    changeWidth() {
      this.strokeWidth = this.strokeWidthValue;
      localStorage.setItem('strokeWidth', this.strokeWidth);
    },
    showDash() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.strokeDashArray = "200 20";
        localStorage.setItem('strokeDashArray', this.strokeDashArray);
      }
      if (!this.isActive) {
        this.strokeDashArray = "0";
        localStorage.setItem('strokeDashArray', this.strokeDashArray);
      }
      localStorage.setItem('isActive', this.isActive);
    },
    linecapRound() {
      this.lineCapRoundC = !this.lineCapRoundC;
      if (this.lineCapRoundC) {
        this.lineCap = "round";
        this.lineJoin = "round";
        localStorage.setItem('lineCap', 'round');
        localStorage.setItem('lineJoin', 'round');
      }
      if (!this.lineCapRoundC) {
        this.lineCap = "butt";
        this.lineJoin = "miter";
        localStorage.setItem('lineCap', 'butt');
        localStorage.setItem('lineJoin', 'miter');
      }
      localStorage.setItem('lineCapRoundC', this.lineCapRoundC);
    },
    chanceDashoffset() {
      this.strokeDashoffset = this.strokeDashoffsetValue;
      localStorage.setItem('strokeDashoffset', this.strokeDashoffset);
    },
    openCode(icon) {
      this.selectedIcon = icon;
      this.selectedIcon.title = icon.title
    },
    holacodepen(icon) {
      var codepenhtml =
        "<svg fill='" +
        this.fillColor +
        "' stroke='" +
        this.strokeColor +
        "' stroke-width='" +
        this.strokeWidth +
        "' stroke-dashoffset='" +
        this.strokeDashoffset +
        "' stroke-dasharray='" +
        this.strokeDashArray +
        "' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
        icon.editable +
        "</svg>";
      var penArr = {
        title: "Hola SVG editable icon",
        html: codepenhtml,
        css: "svg { width: 100px; height: 100px; }"
      }
      this.codepenvalue = JSON.stringify(penArr)
      this.$nextTick(() => {
        event.target.parentElement.submit()
      });
    },
    holaclipboard(icon) {
      this.selectedIcon =
        "<svg fill='" +
        this.fillColor +
        "' stroke='" +
        this.strokeColor +
        "' stroke-width='" +
        this.strokeWidth +
        "' stroke-dashoffset='" +
        this.strokeDashoffset +
        "' stroke-dasharray='" +
        this.strokeDashArray +
        "' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
        icon.editable +
        "</svg>";
      this.copyText = "Copied!";
      setTimeout(() => (this.copyText = "Copy"), 1000);
      this.copyToClipboard(this.selectedIcon);
    },
    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
      } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },
  },
};
</script>

<style lang="scss">
:root {
  --bgLighter: #fffaf4;
  --borderColor: #212832;
  --bgColor: #FFF6EC;
  --stripedColor: rgba(255,255,255,.7);
  --siteRed: #FF5463;
  --siteOrange: #FF9365;
  --siteYellow: #FBD887;
  // --siteLightblue: #69BBBC;
  --siteLightblue: #84c9d2;
  --siteBlue: #6EBFB5;
  --siteGreen: #9EE6CF;
  --textColor: #0E1A27;


    --borderColor: #222831;
  // --bgColor: #ffe3d4;
  --stripedColor: rgba(255,255,255,.7);
  // --siteRed: #FF5463;
  // --siteBlue: #24A19C;
  // --siteGreen: #6EBFB5;
  // --textColor: #222831;
}
html {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.top {
  background-color: var(--siteRed);
  border-bottom: 1px solid var(--borderColor);
  height: .5rem;
  width: 100%;
  .loaders-page & {
    background-color: var(--siteLightblue);
  }
}
body {
  background-color: var(--bgColor);
  background-image: linear-gradient(0deg,transparent 24%, var(--stripedColor) 25%, var(--stripedColor) 26%,transparent 27%,transparent 74%, var(--stripedColor)  75%, var(--stripedColor)  76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%, var(--stripedColor)  25%, var(--stripedColor)  26%,transparent 27%,transparent 74%, var(--stripedColor)  75%, var(--stripedColor)  76%,transparent 77%,transparent);
  background-size: 40px 40px;
  color: var(--textColor);
  height: 100%;
  margin: 0;
  text-align: center;
  &.loaders-page {
    --bgLighter: #1e2d40;
    --bgColor: #0E1A27;
    --textColor: #FFF6EC;

    --stripedColor: #222831;
    --borderColor: #1e2d40;
  }
}
.main-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
h1 {
  font-weight: 900;
  letter-spacing: .05em;
  margin: 3rem 0 0;
  text-transform: uppercase;
}
a { transition: all .2s; }

.highlight {
  color: var(--siteRed);
}
.home-link {
  display: block;
  font-size: 1rem;
  a {
    color: var(--siteOrange);
    transition: color .2s;
    text-decoration: none;
    &:hover {
      color: var(--siteRed);
    }
  }
}
h2 { font-size: 1.2rem; font-weight: 400; }
h2 a {
  color: var(--siteBlue);
  &:hover {
    color: var(--siteOrange);
    text-decoration: none;
  }
}
.icons-container {
  gap: .5em;
  justify-content: space-between;
  margin: 1em auto 5em;
  max-width: 1200px;
  grid-auto-flow: row dense;
  @media (min-width: 20em) /* 320px */ {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 40em) /* 640px */ {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 50em) /* 800px */ {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 60em) /* 960px */ {
    grid-template-columns: repeat(5, 1fr);
    grid-template-columns: repeat(6, 1fr);
  }
  .single-icon {
    background-color: var(--bgColor);
    border: 1px solid var(--borderColor);
    display: grid;
    padding-top: .8em;
    position: relative;
    transition: all .2s;
    // user-select: none;
    // &:nth-child(13n) {
    //   grid-column: span 2;
    //   grid-row: span 2;
    // }
    &:nth-child(17n) {
      grid-row: span 2;
    }
    &:nth-child(7n) {
      grid-column: span 2;
    }
    &.active,
    &:hover, &:focus, &:focus-within {
      background-color: var(--bgLighter);
      .btn { opacity:1; visibility: visible; }
      p { background-color: var(--siteGreen);}
      svg { margin: .5em auto; }
    }
    form { display: inherit; }
    p {
      border-top: 1px solid var(--borderColor);
      margin: 0;
      padding: .4em;
      text-transform: lowercase;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      height: 60px;
      margin: 2em auto -1em;
      transition: margin .2s;
      width: 60px;
      &.with-bg {
        background-image: radial-gradient(rgba(110, 191, 181, .4) 18%, transparent 18%);
        background-size: 140px 140px;
        background-position: -45px -40px;
      }
    }
    .btn {
      background-color: var(--bgColor);
      border:0;
      border-top: 1px solid var(--borderColor);
      cursor: pointer;
      font-family: 'Montserrat';
      font-size: 1rem;
      font-weight: 500;
      opacity: 0;
      padding: .5em 0;
      visibility: hidden;
    }
    .btn-copy {
      background-color: var(--siteRed);
      color: var(--textColor);
      transition: all .2s;
    }
    .btn-codepen {
      background-color: var(--textColor);
      color: white;
      margin: .4em 0 0;
      transition: all .4s;
      width: 100%;
      svg { 
        fill: white; 
        height: 20px;
        margin: 0 .4em 0 0;
        vertical-align: middle;
        width: 20px;
      }
    }
  }
}
.btn-reset {
  background-color: white;
  border: 1px solid;
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: 500;  
  padding: 4px 10px;
  &:hover{
    background-color: var(--siteYellow);
  }
}

.feedback {
  border: 1px solid;
  border-radius: 2px;
  color: var(--siteOrange);
  display: inline-block;
  margin: 0 auto 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  width: max-content;
  &:hover { color: var(--siteRed); }
}

.share-twitter {
  color: var(--siteBlue);
  display: inline-block;
  font-weight: 900;
  position: absolute;
  top: 1em;
  right: 1em;
  text-decoration: none;
  svg {
    fill: var(--siteGreen);
    height: 1.5rem;
    transition: transform .2s;
    vertical-align: text-bottom;
    width: 1.5rem;
  }
  &:hover {
    color: var(--siteOrange);
    text-decoration: none;
    svg {
      fill: var(--siteBlue);
      transform: translate(1.2em, -2.5em);
    }
  }
}
.style-bar {
  align-items: center;
  background-color: var(--bgColor);
  border: 1px solid var(--borderColor);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  position:sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  @media (max-width: 60em) /* 960px */ {
    padding-bottom: .5rem;
  }
  > div { 
    align-items: center; 
    display: flex; 
    margin: 1rem;
    &.show-dash-position {
      display: none;
      &.active { display: flex;}
    }
  }
  // input[type="checkbox"] {
  //   height: 2rem;
  //   width: 2rem;
  // }
  label { 
    margin-right: .8rem; 
    &.checkmark-container { margin-right: 0; }
  }
  input[type=range] {
    width: 14em;
    margin: 13.8px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: var(--siteBlue);
    border: 0.2px solid var(--borderColor);
    border-radius: 1.3px;
    cursor: pointer;
    width: 100%;
    height: 8.4px;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -14px;
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid var(--borderColor);
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: var(--siteGreen);
  }
  input[type=range]::-moz-range-track {
    background: var(--siteBlue);
    border: 0.2px solid var(--borderColor);
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid var(--borderColor);
    border-radius: 3px;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 14.8px 0;
    color: transparent;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: var(--siteBlue);
    border: 0.2px solid var(--borderColor);
    border-radius: 2.6px;
  }
  input[type=range]::-ms-fill-upper {
    background: var(--siteBlue);
    border: 0.2px solid var(--borderColor);
    border-radius: 2.6px;
  }
  input[type=range]::-ms-thumb {
    width: 16px;
    height: 36px;
    background: #ffffff;
    border: 1px solid var(--borderColor);
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: var(--siteBlue);
  }
  input[type=range]:focus::-ms-fill-upper {
    background: var(--siteGreen);
  }
  @supports (-ms-ime-align:auto) {
    input[type=range] {
      margin: 0;
    }
  }
  input[type="color"] {
    background-color: white;
    border: 1px solid var(--borderColor);
    padding: .2rem;
    width: 3rem;
    height: 2rem;
    -webkit-appearance: none;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    // background-color: white;
    padding: .05rem;
  }
  input[type="color"]::-webkit-color-swatch {
    // background-color: white;
    border:0;
  }
}

.checkmark-container {
	cursor: pointer;
  align-items: center;
  display: flex;
  position: relative;
  input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    right: -3px;
    top: -3px;
    height: 2rem;
    width: 2rem;
    &:hover + svg {
      .checkmark-bg { fill: var(--siteGreen); }
    }
    &:checked + svg {
      .checkmark-bg { fill: var(--siteBlue); }
      .checkmark { stroke: white; }
    }
    &:focus + svg {
      outline: -webkit-focus-ring-color auto 1px;
    }
  }
  svg {
    margin-left: .8rem;
    stroke: var(--borderColor);
    width: 2rem;
    height: 2rem;
    * { transition: all .1s linear; }
  }
}

.checkmark-container svg {
  @media screen and (-ms-high-contrast: active) {
    rect { stroke: windowText; }
  }
}
@media screen and (-ms-high-contrast: active) {
  .checkmark-container input[type="checkbox"]:checked ~ svg {
    rect { fill: windowText; }
    polyline { stroke: highlight; }
  }
}

@media (max-width: 40em) /* 640px */ {
  .mobile-none { display: none; }
}
// .copycode {
//   background-color: #150423;
//   border-radius: 4px;
//   color: whitesmoke;
//   margin-left: 2em;
//   max-width: 960px;
//   position: fixed;
//   bottom: 3em;
//   right: 2em;
//   padding: 1em;
//   text-align: right;
//   white-space: pre-line;
//   z-index: 1;
//   svg div {
//     display: none;
//   }
//   div {
//     font-size: 1.1rem;
//     margin: 0 auto;
//     overflow-x: auto;
//     text-align: left;
//     @media (min-width: 800px) {
//       max-width: max-content;
//     }
//   }
// }
</style>
