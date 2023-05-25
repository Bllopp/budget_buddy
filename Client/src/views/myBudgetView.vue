<template>
    <div>
        <ChartItem /> <!--to have multiple charts, use props see : https://stackoverflow.com/questions/56625259/how-to-create-multiple-chart-on-one-component-vue-->
        <p>here is my budget view</p>
    </div>
    
    
    </template>
    <script>
    import ChartItem from '@/components/ChartItem.vue';

    export default {
        components : {
            ChartItem,
        },
        name:"myBudgetView"
    }
</script>

<style scoped>
   
</style>