const MyDialog={
    template: `
      <div class="dialog" v-if="show" @click="hideDialog()">
      <div @click.stop class="dialog-body">
        <div class="my-modal-title">
          <slot name="title"></slot>
        </div>
        <slot name="body"></slot>
      </div>
      </div>
    `,
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}