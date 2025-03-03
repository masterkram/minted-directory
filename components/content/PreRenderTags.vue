<script setup>
const appConfig = useAppConfig();

const tags = appConfig?.directory?.tags || [];

const routesToPrerender = tags.map(tag => `/tags/${tag?.name}`);

prerenderRoutes(routesToPrerender);
</script>
