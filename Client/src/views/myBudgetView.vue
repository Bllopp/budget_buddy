<template>
    <div>
        <ChartItem />
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