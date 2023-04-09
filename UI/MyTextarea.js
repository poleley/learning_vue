const MyTextarea={
    template: `
    <textarea
        :value="modelValue"
        @input="updateTextarea"
        class="textarea"
    ></textarea>
    `,
    props: {
        modelValue: [String]
    },
    methods: {
        updateTextarea(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}