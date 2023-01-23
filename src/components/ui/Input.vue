<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>

export default {
    name: 'Input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}

</script>

<style scoped>

.input {
    width: 100%;
    padding: 10px 15px;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
}

.input::placeholder {
    font-family: 'Montserrat-Medium';
}


</style>