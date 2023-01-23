<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog () {
            this.$emit('update:show', false)
        }
    }
}

</script>

<style scoped>

.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--opacity-if-modal);
    display: flex;
    position: fixed;
}

.content {
    margin: auto;
    background: var(--background-modal);
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
}

</style>