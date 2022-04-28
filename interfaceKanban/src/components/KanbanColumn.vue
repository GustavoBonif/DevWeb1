<script>
    import KanbanCard from './KanbanCard.vue'
    export default {
        props: ['title'],
        components: { KanbanCard },
        data() {
            return {
                cardContent: [
                    {id: 0, title: "Card 1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 2, title: "Card 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 3, title: "Card 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 4, title: "Card 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 5, title: "Card 5", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 6, title: "Card 6", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                    {id: 7, title: "Card 7", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed tenetur alias quos eligendi laborum maiores cupiditate id? Accusantium enim error ad, distinctio iure commodi nemo animi tenetur harum vel."},
                ]
            }
        }
    };
</script>
<template>
    <div class="column">
        <h2 class="column-title"> {{ title }} </h2>

        <KanbanCard v-for="card in cardContent" :key="card.id" :card="card" />

        <KanbanCard card-title="Card2" item-content="Issue 2" />
        <KanbanCard card-title="Card3" item-content="Issue 3" />
        <KanbanCard card-title="Card4" item-content="Issue 4" />
        <KanbanCard card-title="Card5" item-content="Issue 5" />
    </div>
</template>

<style>
.column {
  width: 40%;
  border: 1px solid #000000;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #6457A6;
}

.column-title {
    text-align: center;
    background-color: #FFFFFF;
    margin: 0;
}
</style>
