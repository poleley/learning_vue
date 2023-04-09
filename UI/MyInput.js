const MyInput={
    template: `
    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
    `,
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}