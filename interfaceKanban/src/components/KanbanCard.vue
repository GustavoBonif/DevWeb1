<script>
export default {
    props: {
        card: {type: Object, default: [],}
    },
};
</script>
<template>
    <div class="card">
        <div class="card-header">
            <h2> {{ card.title }} </h2>
        </div>
        <div class="card-body">
            <p>{{ card.content }}</p>
        </div>
        <div class="card-footer">
            <button class="button-action">Ação</button>
        </div>
    </div>
</template>

<style>

.card {
    background-color: #9DACFF;
    margin: 10%;
    padding: 2%;
}

.card-header {
    /* background-color: #FFFFFF; */
}

.button-action {
    background-color: #4BC0D9; /* Green */
    border: none;
    /* color: white; */
    /* border: 2px #5C2751 solid; */
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

/* .button-action:hover {
    border: 2px #5C2751 solid; 
} */

</style>