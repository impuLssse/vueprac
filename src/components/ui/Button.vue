<template>
    <button v-if="type == 'remove'" class="btn">
        <slot>
            <i class="fa-solid fa-trash"></i>
        </slot>
    </button>

    <button v-else-if="type == 'create'" class="btn">
        <slot>
            <i class="fa-solid fa-plus"></i>
        </slot>
    </button>

    <button v-else class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: String,
    },
    data () {
        return {
            icon: String
        }
    }
}
</script>

<style scoped>

.btn {
    padding: 10px 15px;
    font-family: 'Montserrat-SemiBold';
    color: var(--button-text);
    background: none;
    border: 1px solid var(--primary);
    border-radius: 9px;
}


.btn:hover {
    cursor: pointer;
    border: 1px solid var(--primary);
    background: var(--primary);
    color: var(--background-button);
}

</style>