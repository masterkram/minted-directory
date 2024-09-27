<script setup>
const colorMode = useColorMode();
const id = useId();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});


const { onLoaded } = useScript('https://platform.twitter.com/widgets.js');

function createTweet() {
  const tweetContainer = document.getElementById(id);

  twttr.widgets.createTweet(
    props.id,
    tweetContainer,
    {
      theme: colorMode.value === 'dark' ? 'dark' : ''
    }
  );
}

function switchTweetTheme(currentTheme, targetTheme) {
  var tweets = document.querySelectorAll('[data-tweet-id]');

  tweets.forEach(function (tweet) {
    var src = tweet.getAttribute("src");
    tweet.setAttribute("src", src.replace("theme=" + currentTheme, "theme=" + targetTheme));
  });
}

onLoaded(() => {
  createTweet();
});

watch(() => colorMode.value, (newTheme, oldTheme) => {
  switchTweetTheme(oldTheme, newTheme);
}, { deep: true });
</script>

<template>
  <div :id="id"></div>
</template>

<style>
.twitter-tweet iframe {
  color-scheme: light;
}
</style>