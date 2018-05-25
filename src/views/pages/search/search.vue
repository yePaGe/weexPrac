<template>
    <div>
        <Top></Top>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Top from '../../components/top/top1.vue';
import Bottom from '../../components/bottom/bottom.vue';

export default {
    data() {
        return {
            
        }
    },
    components: {
        Top,
        Bottom        
    },
    created() {

    }
}
</script>

<style lang='sass'>
@import './search.scss';
</style>