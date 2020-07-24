<template>
  <div class="no-edit-text-field">
    <p class="label">{{label}}</p>
    <p class="grey--black">{{default_value}}</p>
  </div>
</template>

<script>
export default {
    props: {
        label: {type: String, default: ''},
        default_value: {default: ''}
    }
}
</script>

<style lang="scss">
    .no-edit-text-field{
        .label{
            margin-bottom: 2px;
            color: #7d7d7d;
            font-weight: 600;
            font-size: 15px;
        }
    }
</style>