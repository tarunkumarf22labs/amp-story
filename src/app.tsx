// @ts-nocheck
import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async src="https://cdn.ampproject.org/v0.js"></script>

   <amp-story standalone
      title="Stories in AMP - Hello World"
      publisher="AMP Project"
      publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
      poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
      poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
      poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg">

      <amp-story-page id="page-1">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://amp.dev/static/samples/img/story_dog2.jpg"
                   width="720" height="1280"
                   layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>Hello World</h1>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="page-2">
        <amp-story-grid-layer template="fill">
          <amp-video autoplay loop
                width="720"
                height="960"
                poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
                layout="responsive">
                <source src="https://amp.dev/static/samples/video/story_video_dog.mp4" type="video/mp4"/>
          </amp-video>
        </amp-story-grid-layer>
      </amp-story-page>

  
      <amp-story-page id="animation-demo">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://amp.dev/static/samples/img/story_dog4.jpg"
                   animate-in="fly-in-top"
                   width="720" height="1280"
                   layout="responsive"
                   alt="...">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
          <h2 animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s">
            Best walk ever!
          </h2>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="layout-demo">
        <amp-story-grid-layer template="thirds">
          <amp-img grid-area="upper-third"
                   src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
                   width="560" height="420"
                   layout="responsive"
                   alt="...">
          </amp-img>
          <amp-img grid-area="middle-third"
                   src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
                   width="560" height="420"
                   layout="responsive"
                   alt="...">
          </amp-img>
          <amp-img grid-area="lower-third"
                   src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
                   width="560"
                   height="420"
                   layout="responsive"
                   alt="...">
          </amp-img>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
      </amp-story-bookend>
    </amp-story>
   



   
    </>
  )
}


