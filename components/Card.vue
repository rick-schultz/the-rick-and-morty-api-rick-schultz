<template>
  <article class="cardWrapper">
    <div class="imgWrapper">
      <img :src="image"
      alt="Character Image" />
    </div>
    <div class="contentWrapper">
      <div class="section">
        <a :href="url"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="externalLink">
        <h2>{{name}}</h2>
        </a>
        <span class="status">
          <span :class="status">
          </span>
          {{status}} - {{species}}
        </span>
      </div>
      <div class="section">
        <span class="text-gray">Last known location:</span>
        <a :href="location.url"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="externalLink">
        {{location.name}}
        </a>
      </div>
      <div class="section">
        <span class="text-gray">First seen in:</span>
        <a :href="episode"
        rel="nofollow noopener noreferrer"
        target="_blank"
        class="externalLink">
        {{episodename}}
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
props: {
  'name': {
    type: String,
    default: ''
    },
  'image': {
    type: String,
    default: ''
    },
  'status': {
    type: String,
    default: ''
    },
  'url': {
    type: String,
    default: ''
    },
  'location': {
    type: Object,
    default() {}
    },
  'episode': {
    type: String,
    default: ''
    },
  'episodename': {
    type: String,
    default: ''
    },
  'species': {
    type: String,
    default: ''
    },
  }
}
</script>

<style>
  .cardWrapper {
  width: 555px;
  height: 230px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  line-height: 2;
  transition: 0.3s
  }

  @media screen and (max-width: 595px) {
  .cardWrapper {
  width: 375px;
  height: 270px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  line-height: 2;
  transition: 0.3s
  }
  }

  .cardWrapper:hover {
  background: rgb(48, 49, 54) none repeat scroll 0% 0%;
  }

  .imgWrapper {
  flex: 2 1 0%;
  width: 100%;
  }

  .imgWrapper img {
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
  }

  .contentWrapper {
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  }

  .contentWrapper a {
  color: rgb(245, 245, 245);
  }

  .section:first-child {
  -moz-box-pack: start;
  justify-content: flex-start;
  }

  .section:last-child {
  -moz-box-pack: end;
  justify-content: flex-end;
  }

  .section {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -moz-box-pack: center;
  justify-content: center;
  }

  a, h2 {
  color: #FFF !important;
  text-decoration: none;
  }

  a:hover, h2:hover {
  color: rgb(255, 152, 0) !important;
  text-decoration: none;
  }

  .status {
  display: flex;
  -moz-box-align: center;
  align-items: center;
  text-transform: capitalize;
  }

  .Alive {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68) none repeat scroll 0% 0%;
  border-radius: 50%;
  }

  .Dead {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(216, 17, 17) none repeat scroll 0% 0%;
  border-radius: 50%;
  }

  .unknown {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(0, 0, 0) none repeat scroll 0% 0%;
  border-radius: 50%;
  }

  .text-gray {
  color: rgb(158, 158, 158);
  }
</style>
