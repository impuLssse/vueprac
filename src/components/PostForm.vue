<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <Input
            v-model="post.title"
            type="text"
            placeholder="name"
        />
        
        <Input
            v-model="post.body"
            type="text"
            placeholder="description"
        />

        <Button
            @click="createPost"
            style="align-self: flex-end; margin-top: 15px;"
        >Создать</Button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost () {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    },
}
</script>

<style>

.form {
    display: flex;
    flex-direction: column;
}

</style>