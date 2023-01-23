<template>
    <select class="select" :value="modelValue" @change="changeOption">
        <option disabled value="">
            Выберите из списка <i class="fa-sharp fa-solid fa-down"></i>
        </option>

        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'Select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style scoped>

.select {
    display: inline-block;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 10px;
    padding: 10px 15px;
    background: var(--background);
    color: var(--primary);
    appearance: none;
}

</style>