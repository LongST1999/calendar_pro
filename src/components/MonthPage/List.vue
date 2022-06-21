<template>
  <div class="list-wrapper"></div>
      <ul class="holiday-list">
      <card-item
        v-for="(item, index) of data"
        :key="index"
        :item="item"
      />
    </ul>
</template>

<script>

import CardItem from './Item';

export default {
  name: 'CardList',
  components: {
    CardItem
  },
  props: {
    data: Array
  }
}
</script>