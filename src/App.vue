<template>
    <div class="app">
        <header class="header">
            <h1 class="header__title">Посты</h1>
            <div class="header__navbar">
                <a class="header__navbar-item" href="#">Пользователи</a>
                <a class="header__navbar-item" href="#">Документация</a>
                <a class="header__navbar-item" href="#">О нас</a>
                <a class="header__navbar-item" href="#">Другое</a>
            </div>
        </header>

        <Input
            v-model="searchPost"
            placeholder="Поиск..."
            />

        <div class="btns">
            <Button @click="showDialog">
                Создать пост
            </Button>

            <Select
                v-model="selectedSort"
                :options="sortOptions"
            ></Select>
        </div>

        <Dialog v-model:show="dVisiable">
            <PostForm @create="createPost" />
        </Dialog>

        <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
        <div v-else>Loading...</div>
    </div>
</template>

<!--  -->

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import axios from 'axios'

export default {
    components: {
        PostList, PostForm
    },
    data () {
        return {
            posts: [],
            dVisiable: false,
            isPostsLoading: false,
            selectedSort: '',
            searchPost: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержанию' },
            ]
        }
    },
    methods: {
        createPost (post) {
            this.posts.push(post)
        },
        removePost (post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog () {
            this.dVisiable = true
        },
        async getPosts () {
            try {
                this.isPostsLoading = true

                const res = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.posts = res.data
            } catch (e) {
                console.log(e)
            } finally {
                this.isPostsLoading = false
            } 
        }
    },
    mounted () {
        this.getPosts()
    },
    computed: {
        sortedPosts (value) {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts () {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchPost.toLowerCase()))
        }
    },
}


</script>

<!--  -->

<style>
@font-face {
    font-family: 'Unbounded-Bold';
    src: url('./assets/fonts/Unbounded-Bold.ttf');
}

@font-face {
    font-family: 'Montserrat-Bold';
    src: url('./assets/fonts/Montserrat-Bold.ttf');
}

@font-face {
    font-family: 'Montserrat-Regular';
    src: url('./assets/fonts/Montserrat-Regular.ttf');
}

@font-face {
    font-family: 'Montserrat-Medium';
    src: url('./assets/fonts/Montserrat-Medium.ttf');
}

@font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('./assets/fonts/Montserrat-SemiBold.ttf');
}

:root {
    --text: #fff;
    --primary: #FFCC66;
    --background: #252525;
    --opacity-if-modal: rgba(0, 0, 0, 0.8);
    --background-modal: #915817;
    --background-button: #660000;
    --any-border: #FFCC66;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--background);
    color: var(--text);
    margin: 20px 200px;
}

.app {
    font-family: 'Montserrat-Regular';
    padding: 20px;
}

.header {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
}

.header__title {
    font-family: 'Unbounded-Bold';
}

.header__navbar {
    display: flex;
    width: 35%;
    text-transform: lowercase;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Unbounded-Bold';
    color: var(--primary);
}

.header__navbar-item {
    text-decoration: none;
    color: var(--text);
}

.btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

</style>