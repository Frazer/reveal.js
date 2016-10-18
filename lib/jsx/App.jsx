import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';



export default class App  extends Component {
	constructor(props) {
  	super(props);

		this.state = {
 		};

	}


  componentDidMount() {
      // More info https://github.com/hakimel/reveal.js#configuration     
      Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        shuffle: true,
        loop: true,

        autoSlide: 8000,
        minScale: 1,
        maxScale: 1,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
          { src: '/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
          { src: '/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: '/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
          { src: '/reveal.js/plugin/zoom-js/zoom.js', async: true },
          { src: '/reveal.js/plugin/notes/notes.js', async: true }
        ]
      });

  }


	render() {


  	return (

    <div className="reveal">

      <div className="slides">

        <section data-background-image="motivation-img/sleep.jpg" className="with-image">
          <h2>Sleep</h2>
          <p>Being well rested is my priority.
          </p>
        </section>

        <section data-background-image="motivation-img/choice.jpg" className="with-image">
          <h2>Your Choice</h2>
          <p>You can take it or leave it.
          </p>
        </section>

        <section data-background-image="motivation-img/stillness.jpg" className="with-image">
          <h1>Stillness</h1>
        </section>

        <section data-background-image="motivation-img/laugh.jpg" className="with-image">
          <h1>I'm hilarious!</h1>
        </section>

        <section data-background-image="motivation-img/inspiration.jpg" className="with-image">
          <h1>Inspiration!</h1>
          <p>I shine my light for others.</p>
        </section>

        <section data-background-image="motivation-img/happiness.jpg" className="with-image">
          <h1>I choose happiness.</h1>
        </section>

        <section data-background-image="motivation-img/breathe.jpg" className="with-image">
          <p>Am I breathing?</p>
          <h1>Present.</h1>
        </section>

        <section data-background-image="motivation-img/plan.jpg" className="with-image">
          <h2>Plan</h2>
          <p>If tomorrow's schedule isn't written, we write it <br/>RIGTH NOW!
          </p>
        </section>


        <section data-background-image="motivation-img/motivation.jpg" className="with-image">
          <h2>Motivation</h2>
          <p>我们有无限的动机!<br/>
            <span >Wǒmen yǒu wúxiàn de dòngjī</span>
          </p>
          <audio data-autoplay src="motivation.mp3"></audio>
          <p>Wir haben unendlich viel Motivation!</p>
        </section>


        <section data-background-image="motivation-img/focus.jpg" className="with-image">
          <h2>Focus</h2>
          <p>We love being in the flow, in the zone.
          </p>
          <p>We are super excited getting started, <u>getting focused</u>, getting ready.</p>
        </section>


        <section data-background-image="motivation-img/meditation.jpg" className="with-image">
          <h2>Meditation</h2>
          <p>I look forward to meditation.
          </p>
        </section>


        <section data-background-image="motivation-img/languages.png" className="with-image">
          <h2>Language</h2>
          <p>I have ease and confidence in any language.
          </p>
        </section>


        <section data-background-image="motivation-img/memory.jpg" className="with-image">
          <h2>Memory</h2>
          <p>We do memory training every day.
          </p>
        </section>


        <section data-background-image="motivation-img/feelgood.png" className="with-image">
          <h2>Emotions</h2>
          <p>I choose beautiful feelings in every situation.
          </p>
        </section>


        <section data-background-image="motivation-img/neurons.jpg" className="with-image">
          <h2>Brain</h2>
          <p>When I brain-program, I visualize and emotionalize <br/><b>being totally awesome</b><br/>
            and that transformation happening massively.
          </p>
        </section>


        <section data-background-image="motivation-img/meditation2.jpg" className="with-image">
          <h2>Meditation</h2>
          <div style={{textAlign: "left"}}>We sit to meditate:
          <ul>
            <li>every morning before breakfast and </li>
            <li>every evening before dinner.</li>
          </ul>

          </div>
        </section>
       </div>

    </div>
		);
	}
}

