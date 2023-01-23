<template>
    <div class="post">
        <div>
            <div>
                <h3>{{ post.title }}</h3>
            </div>

            <div>{{ post.body }}</div>
        </div>

        <div class="post__btns">
            <Button type="remove" @click="$emit('remove', post)"></Button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

.post {
    padding: 15px;
    border: 1px solid var(--primary);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
}

</style>